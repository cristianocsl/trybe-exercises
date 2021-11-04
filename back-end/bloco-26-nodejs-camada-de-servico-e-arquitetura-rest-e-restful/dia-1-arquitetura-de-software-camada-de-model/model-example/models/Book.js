const connection = require('./connection');

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

module.exports = {
  getAll,
  findById,
};
