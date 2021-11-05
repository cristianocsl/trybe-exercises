const connection = require('./connection 3');
const Author = require('./Author 3');

const serialize = ({ id, title, author_id }) => ({ id, title, authorId: author_id });

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM model_example.books;');

  return books.map(serialize);
};

const findById = async (id) => {
  const query = 'SELECT id, title, author_id FROM model_example.books WHERE id = ?';
  
  const [bookData] = await connection.execute(query, [id]);

  if (bookData.length === 0) return null;

  const book = bookData.map(serialize);

  return book;
}

const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false;

  return true;
}

const create = async (title, authorId) => await connection.execute('INSERT INTO model_example.books (title, author_id) VALUES (?,?)',[title, authorId]);

const getByAuthorId = async (authorId) => {
  const query = 'SELECT * FROM model_example.books WHERER author_id = ?;'
  const [books] = await connection.execute(query, [authorId]);

  return books.map(({ id, title, author_id }) => ({ 
    id,
    title,
    authorId: author_id,
  }));
}

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  isValid,
  create,
};
