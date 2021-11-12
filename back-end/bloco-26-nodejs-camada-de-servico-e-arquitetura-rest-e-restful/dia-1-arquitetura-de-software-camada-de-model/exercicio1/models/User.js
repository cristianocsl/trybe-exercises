const connection = require('./connection');
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

module.exports = {
  isValid,
  create,
  findAll,
}
