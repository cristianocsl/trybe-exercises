const connection = require('./connection');
const { ObjectId } = require('mongodb');
 // Função que remove dos documentos da collection 'users', os campos indesejados
const formatUser = (document) => {
  const {
    // Extraímos as propriedades `_id` e `password`
    _id, password,
    // Utilizamos o operador _rest_ (`...`) para guardar o resto das propriedades numa constante chamada `user`.
    ...user } = document;
  const formattedResult = { 
    // O campo `id` recebe o valor de `_id`
    id: _id,
    // Utilizamos o operador _spread_ (`...`) para adicionar o resto das propriedades que tínhamos gravado em `user`
    ...user };
  return formattedResult;
};

const isValid = ({ firstName, lastName, email, password }) => {
  const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  const fields = [firstName, lastName, email, password];

  if (fields.includes(undefined) || fields.includes(null) || fields.includes('')) return false;

  return PASSWORD_REGEX.test(password);
}

const create = async ({ firstName, lastName, email, password }) => {
  return await connection()
    .then(
      (db) => db
        .collection('users')
        .insertOne({ firstName, lastName, email, password })
    )
    .then((result) => ({ id: result.insertedId, firstName, lastName, email }));
}

const findAll = async () => {
  return await connection()
    .then(
      (db) => db
        .collection('users')
        .find({})
        .toArray()
    ).then((array) => array.map(formatUser));
};

const findUserById = async (id) => {
  // verifica se o id é falso.
  if (!ObjectId.isValid(id)) return null;

  const user = await connection()
    .then(
      (db) => db
        .collection('users')
        .findOne(new ObjectId(id))
    );
  
  if (!user) return null;

  return formatUser(user);
};

const userUpdate = async (id, { firstName, lastName, email, password }) => {
  if (!ObjectId.isValid(id)) return null;

  const updatedUser = await connection()
    .then(
      (db) => {
        // converte o parâmetro `id` para um `ObjectId` do MongoDB
        const userId = new ObjectId(id);
        const newData = { firstName, lastName, email, password};
        // Repare no uso da opção `returnDocument: after`. Ela faz com que o documento retornado já contenha os dados atualizados.
        // findOneAndUpdate: função do mongodb.
        return db.collection('users')
        .findOneAndUpdate(
          { _id: userId },
          { $set: newData },
          { returnDocument: after }
          ).then((result) => result.value)
      }
    );
  if (!updatedUser) return null;
  return formatUser(updatedUser);
}

module.exports = {
  isValid,
  create,
  findAll,
  findUserById,
  userUpdate,
}
