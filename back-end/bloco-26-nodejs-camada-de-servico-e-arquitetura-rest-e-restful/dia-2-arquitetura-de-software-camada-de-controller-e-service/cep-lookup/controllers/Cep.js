const rescue = require('express-rescue');
const CepService = require('../services/Cep');
const Joi = require('joi');

const findAddressByCep = rescue(
  async (req, res, next) => {
    const { cep } = req.params;
    const address = await CepService.findAddressByCep(cep);

    if (address.error) {
      return next(address.error);
    }
    
    return res.status(200).json(address);
  }
);

const create = rescue(
  async (req, res, next) => {
    // Armazenamos essa parte do schema do Joi para reutilizá-la
    const requireNonEmptyString = Joi.string().not.empty().required();
    // Validação do corpo da request
    const { error } = Joi.object({
      cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
      logradouro: requireNonEmptyString,
      bairro: requireNonEmptyString,
      localidade: requireNonEmptyString,
      uf: requireNonEmptyString.length(2),
    }).validate(req.body);

    // Caso haja erro de validação, iniciamos o fluxo de erro.
    if (error) return next(error);

    // Caso não haja erro de validação, chama a função que cria o cep.
    const newCep = await CepService.create(req.body);

    // Se o cep retornar um erro...
    if (newCep.error) return next(newCep.error);

    res.status(201).json(newCep);
  },
);

module.exports = {
  findAddressByCep,
  create,
}