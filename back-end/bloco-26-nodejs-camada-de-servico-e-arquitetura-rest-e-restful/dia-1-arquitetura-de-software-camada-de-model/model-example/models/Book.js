const connection = require('./connection');

const serialize = (book) => {
  const { _id, title, author_id } = book;
  return { id: _id, title, authorId: author_id };
};

const getAll = async () => {
  return await connection()
    .then((db) => db.collection('books')
    .find({})
    .toArray())
    .then((books) => books.map(serialize));
};

const getByAuthorId = async (author_id) => {
  return await connection()
    .then((db) => db.collection('books')
    .find({ author_id: Number(author_id) })
    .toArray())
    .then((books) => books.map(serialize));
}

module.exports = {
  getAll,
  getByAuthorId,
};
