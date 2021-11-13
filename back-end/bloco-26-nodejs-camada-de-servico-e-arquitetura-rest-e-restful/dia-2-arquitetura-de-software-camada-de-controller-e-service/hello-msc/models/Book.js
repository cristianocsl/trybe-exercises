const connection = require('./connection');
const { ObjectId } = require('mongodb');
// const Author = require('./Author');

const renameId = ({ _id, ...document}) => ({ id: _id, ...document });

const getAll = async () => {
  return await connection()
    .then((db) => db.collection('books')
    .find({})
    .toArray())
    .then((books) => books.map(renameId));
};

const getByAuthorId = async (authorId) => {
  return await connection()
    .then((db) => db.collection('books')
    .find({ authorId })
    .toArray())
    .then((books) => (books ? renameId(books) : books));
}

const findById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const book = await connection()
    .then((db) => db.collection('books')
    .findOne(new ObjectId(id)) // com findOne não é possível transformar para array.
  );

  if (!book) return null;
  return renameId(book);
}

// const isValid = async (title, authorId) => {
//   if (!title || typeof title !== 'string' || title.length < 3) return false;
//   if (!authorId || typeof authorId !== 'string' || authorId.length !== 24 || !(await Author.findById(authorId))) return false;
  
//   return true;
// }

const create = async (title, authorId) => {
  return await connection()
    .then(
      (db) => db.collection('books')
      .insertOne({ title, authorId })
    ).
    then((result) => ({ id: result.insertedId, title, authorId }));
}

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  create,
  // isValid,
};
