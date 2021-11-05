const connection = require('./connection');
const { ObjectId } = require('mongodb');

// Cria uma string com o nome completo do autor


const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;
  
  const fullName = [firstName, middleName, lastName]
  .filter((name) => name)
  .join(' ');
  
  return { id, firstName, middleName, lastName, name: fullName };
};

// Busca todos os autores do banco.
// método execute: retorna promise. fornece um array com 2 campos: [rows, fields]. o campo fields (segundo campo) contém informações extras sobre a query e não serão utilizadas.

const getAll = () => {
  return connection()
    .then(db => db.collection('authors').find().toArray())
    .then((authors) => 
      authors.map(({ _id, firstName, middleName, lastName }) => 
          getNewAuthor({
            id: _id,
            firstName,
            middleName,
            lastName,
          })
        )
      )
}

const findById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  // Utilizamos [0] para buscar a primeira linha, que deve ser a única no array de resultados, pois estamos buscando por ID.

  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(new ObjectId(id)));
  
  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;

  return getNewAuthor({
    id, firstName, middleName, lastName,
  });
};

module.exports = {
  getAll,
  findById,
};
