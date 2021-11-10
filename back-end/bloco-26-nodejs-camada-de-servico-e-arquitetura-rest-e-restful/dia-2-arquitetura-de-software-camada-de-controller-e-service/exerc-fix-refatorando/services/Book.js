const Book = require('../models/Book');
const Author = require('../models/Author');

const getAll = async () => Book.getAll();

const findById = async (id) => {
  const book = await Book.findById(id);

  if (!book) {
    return {
      error: {
        code: 'notFound',
        message: `não foi possível encontrar um livro com o id ${id}`,
      }
    }
  }

  return book;
}

const create = async (title, authorId) => {
  // para criar um livro, um author deve existir previamente em ./models/Author.js
  const existingAuthor = await Author.findById(authorId);

  if (!existingAuthor) {
    return {
      error: {
        code: 'notFound',
        message: 'Autor não encontrado',
      }
    }
  };

  return await Book.create(title, authorId);
};

module.exports = {
  getAll,
  findById,
  create,
}