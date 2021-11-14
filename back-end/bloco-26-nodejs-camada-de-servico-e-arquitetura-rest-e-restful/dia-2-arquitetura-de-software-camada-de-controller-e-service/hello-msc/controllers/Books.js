const BookService = require('../services/Book');
const AuthorService = require('../services/Author');
const rescue = require('express-rescue');

const getAll = rescue(
  async (_req, res) => {
    const book = await BookService.getAll();

    res.status(200).json(book);
  }
);

module.exports = {
  getAll,
}
