const connection = require('./connection');

const getAll = async() => {
  const [ceps] = await connection.execute(
    'SELECT * FROM cep_lookup.ceps;',
  )
  return ceps
}

const CEP_REGEX = /\d{5}-?\d{3}/;

const formatCepOut = (cep) => {
  if (CEP_REGEX.test(cep)) return cep;
  
  // Caso não esteja formatado, utiliza regex para adicionar a formatação
  return cep.replace(/(\d{5})(\d{3})/, '$1 - $2');
}

const getNewCep = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: formatCepOut(cep), logradouro, bairro, localidade, uf,
});

const formatCepIn = (cep) => cep.replace('-', '');

const findAddressByCep = async (cepSearched) => {
  const treatedCep = formatCepIn(cepSearched);
  
  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM cep_lookup.ceps WHERE cep = ?';
  
  const [result] = await connection.execute(query, [treatedCep]);
  
  if (result.length === 0) return null;
  
  return getNewCep(result);
}

const create = async ({ cep, logradouro, bairro, localidade }) => {
  const cepIn = CEP_REGEX.test(cep) ? formatCepIn(cep) : cep;
  

  const query = 'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade) VALUES (?,?,?,?)';

  const [result] = await connection.execute(query,[cepIn, logradouro, bairro, localidade]);

  if (result.length === 0) return null;

  return {
    cep: formatCepOut(cep),
    logradouro,
    bairro,
    localidade,
    uf,
  };
}

module.exports = {
  getAll,
  findAddressByCep,
}