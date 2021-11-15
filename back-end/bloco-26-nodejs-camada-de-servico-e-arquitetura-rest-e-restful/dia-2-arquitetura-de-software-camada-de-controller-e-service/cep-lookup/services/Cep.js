const CepModels = require('../models/Cep');

const getAll = async () => CepModels.getAll();

const CEP_REGEX = /\d{5}-?\d{3}/;

const findAddressByCep = async (cep) => {
  // Valida o CEP e em caso dele ser falso, retorna uma erro
  
  if (!CEP_REGEX.test(cep)) return {
    error: {
      code: 'invalidData',
      message: 'CEP inválido,'
    },
  };
  
  const CEP = await CepModels.findAddressByCep(cep);

  if (!cep) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado',
      }
    }
  }

  return CEP;
};

const create = async ({ cep, logradouro, bairro, localidade, uf}) => {
  const isThereCep = await CepModels.findAddressByCep(cep);
  // como se deseja criar, primeiro verifica se o cep já existe.
  if (isThereCep) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já existente',
      },
    };
  };

  return CepModels.create({ cep, logradouro, bairro, localidade, uf });
}

module.exports = {
  getAll,
  findAddressByCep,
  create,
}