const connection = require('./connection 3');

// Cria uma string com o nome completo do autor

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return { id, firstName, middleName, lastName, name: fullName };
};

// Converte o nome dos campos de snake_case para camelCase

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name
});

// Busca todos os autores do banco.
// método execute: retorna promise. fornece um array com 2 campos: [rows, fields]. o campo fields (segundo campo) contém informações extras sobre a query e não serão utilizadas.

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;'
  );
  return authors.map(serialize).map(getNewAuthor);
};
/*
Busca um autor específico, a partir do seu ID @param {String} id ID do autor a ser recuperado */

const findById = async (id) => {
  const query = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?';
  const [authorData] = await connection.execute(query, [id]);

  if (authorData.length === 0) return null;

  // Utilizamos [0] para buscar a primeira linha, que deve ser a única no array de resultados, pois estamos buscando por ID.

  const { firstName, middleName, lastName } = serialize(authorData[0]);
  
  return getNewAuthor({
    id, firstName, middleName, lastName,
  });
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
}

const create = async (firstName, middleName, lastName) => await connection.execute('INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)', [firstName, middleName, lastName]);

module.exports = {
  getAll,
  findById,
  isValid,
  create,
};
