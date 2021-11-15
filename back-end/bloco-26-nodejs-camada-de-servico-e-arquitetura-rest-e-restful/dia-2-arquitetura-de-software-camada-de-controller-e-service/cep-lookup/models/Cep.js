const connection = require('./connection');

const getAll = async() => {
  const [ceps] = await connection.execute(
    'SELECT * FROM cep_lookup.ceps;',
  )
  return ceps
}

const CEP_REGEX = /\d{5}-?\d{3}/;

const formatCep = (cep) => {
  if (CEP_REGEX.test(cep)) return cep;
  
  // Caso não esteja formatado, utiliza regex para adicionar a formatação
  return cep.replace(/(\d{5})(\d{3})/, '$1 - $2');
}

const getNewCep = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: formatCep(cep), logradouro, bairro, localidade, uf,
});

const findAddressByCep = async (cepSearched) => {
  const treatedCep = cepSearched.replace('-', '');
  
  const query = 'SELECT cep, logradouro, bairro, localidade, ufFROM cep_lookup.ceps WHERE cep = ?';
  
  const [result] = await connection.execute(query, [treatedCep]);
  
  if (result.length === 0) return null;
  
  return getNewCep(result);
}

const create = async ({ cep, logradouro, bairro, localidade }) => {
  
}

module.exports = {
  getAll,
  findAddressByCep,
}