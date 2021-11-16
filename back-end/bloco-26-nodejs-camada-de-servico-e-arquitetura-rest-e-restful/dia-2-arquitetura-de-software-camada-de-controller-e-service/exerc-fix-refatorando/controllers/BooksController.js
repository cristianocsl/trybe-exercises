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

const findById = async (req, res) => {
  const { id } = req.params;
  const book = await service.findById(id);
  if (!book) return res.status(404).json({ message: 'Não encontrado' });
  res.status(200).json(book);
}

module.exports = {
  getAll,
  findById,
}