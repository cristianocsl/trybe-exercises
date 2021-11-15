const connection = require('./connection');

const getAll = async() => {
  const [ceps] = await connection.execute(
    'SELECT * FROM cep_lookup.ceps;',
  )
  return ceps
}

const CEP_REGEX = /\d{5}-\d{3}/;

const formatCepOut = (cep) => {
  if (CEP_REGEX.test(cep)) return cep;
  
  // Caso não esteja formatado, utiliza regex para adicionar a formatação
  return cep.replace(/(\d{5})(\d{3})/, '$1 - $2');
}

const getNewCep = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: formatCepOut(cep), logradouro, bairro, localidade, uf,
});

const formatCepIn = (cep) => cep.replace(/-/ig, '');

const findAddressByCep = async (cepSearched) => {
  const treatedCep = formatCepIn(cepSearched);
  
  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM cep_lookup.ceps WHERE cep = ?';
  
  const [result] = await connection.execute(query, [treatedCep]);
  
  if (result.length === 0) return null;
  
  return getNewCep(result);
}

const create = async ({ cep: rawCep, logradouro, bairro, localidade, uf }) => {
  const cep = CEP_REGEX.test(rawCep) ? formatCepIn(rawCep) : rawCep;
  

  const query = 'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?,?,?,?,?)';

  const [result] = await connection.execute(query,[cep, logradouro, bairro, localidade, uf]);

  if (result.length === 0) return null;

  return {
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  };
}

module.exports = {
  getAll,
  findAddressByCep,
  create,
}