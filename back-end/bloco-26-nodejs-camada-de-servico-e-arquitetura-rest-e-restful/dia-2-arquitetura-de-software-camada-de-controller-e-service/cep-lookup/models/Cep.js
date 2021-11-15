const connection = require('./connection');

const getAll = async() => {
  const [ceps] = await connection.execute(
    'SELECT * FROM cep_lookup.ceps;',
  )
  return ceps
}

const cepIsValid = async(cep) => {
  const CEP_REGEX = /\d{5}-?\d{3}/;
  return CEP_REGEX.test(cep);
}

module.exports = {
  getAll,
}