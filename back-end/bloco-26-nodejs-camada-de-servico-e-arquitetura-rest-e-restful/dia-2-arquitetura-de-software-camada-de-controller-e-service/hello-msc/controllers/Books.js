const BookService = require('../services/Book');
const AuthorService = require('../services/Author');
const rescue = require('express-rescue');

const getAll = rescue(
  async (_req, res) => {
    const book = await BookService.getAll();

    res.status(200).json(book);
  }
);

const findById = rescue(
  async (req, res, next) => {
    const { id } = req.params;
    const book = await BookService.findById(id);

    if (book.error) return next(book.error);

    res.status(200).json(book);
  }
);

module.exports = {
  getAll,
  findById,
}
