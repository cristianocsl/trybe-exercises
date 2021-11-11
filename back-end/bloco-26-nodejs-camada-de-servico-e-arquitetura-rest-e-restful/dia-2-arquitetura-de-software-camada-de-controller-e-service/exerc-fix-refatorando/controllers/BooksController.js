const rescue = require('express-rescue');
const service = require('../services/Book');
const Joi = require('joi');

const getAll = rescue(async (req, res) => {
  const { author_id } = req.query;
  const books = (author_id)
  ? await service.getByAuthorId(author_id)
  : await service.getAll();
  res.status(200).json(books);
});

module.exports = {
  getAll,
}