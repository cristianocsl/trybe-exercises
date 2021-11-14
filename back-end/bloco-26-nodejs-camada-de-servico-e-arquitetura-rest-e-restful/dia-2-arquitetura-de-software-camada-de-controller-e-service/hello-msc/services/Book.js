const AuthorModels = require('../models/Author');
const BookModels = require('../models/Book');

const getAll = async () => await BookModels.getAll();

const findById = async (id) => {
  const book = await BookModels.findById(id);

  if (!book) {
    return {
      error: {
        code: 'notFound',
        message: 'Livro não encontrado',
      },
    };
  };

  return book;
}

const create = async (title, authorId) => {
  const author = await AuthorModels.findById(authorId);
  
  if (!author) {
    return {
      error: {
        code: 'notFound',
        message: 'Autor não encontrado',
      },
    };
  };

  return BookModels.create(title, authorId);
}

module.exports = {
  getAll,
  findById,
  create,
};
