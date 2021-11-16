const BookService = require('../services/Book');
const AuthorService = require('../services/Author');
const rescue = require('express-rescue');
const Joi = require('joi');

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

const create = rescue(
  async (req, res, next) => {
    const { error } = Joi.object({
      title: Joi.string().not().empty().required(),
      authorId: Joi.string().not().empty().required(),
    }).validate(req.body);

    if (error) return next(error);

    const { title, authorId } = req.body;

    const book = await BookService.create(title, authorId);

    if (book.error) return next(book.error);

    res.status(201).json(book);
  }
);

module.exports = {
  getAll,
  findById,
  create,
}
