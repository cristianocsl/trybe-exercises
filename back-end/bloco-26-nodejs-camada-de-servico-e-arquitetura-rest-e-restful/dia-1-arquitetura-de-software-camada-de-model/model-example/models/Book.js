const connection = require('./connection');
const { ObjectId } = require('mongodb');
const Author = require('./Author');

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
    .then((books) => books.map(serialize)
  );
}

const findById = async (id) => {
  const book = await connection()
    .then((db) => db.collection('books')
    .findOne(new ObjectId(id)) // com findOne não é possível transformar para array.
  );

  if (!book) return null;
  return serialize(book);
}

const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'string' || authorId.length !== 24 || !(await Author.findById(authorId))) return false;
  
  return true;
}

const create = async (title, author_id) => {
  return await connection()
    .then(
      (db) => db.collection('books')
      .insertOne({ title, author_id })
    );
}

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  create,
  isValid,
};
