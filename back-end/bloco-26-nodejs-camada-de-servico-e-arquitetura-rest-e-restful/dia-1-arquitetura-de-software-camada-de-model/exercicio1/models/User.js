const connection = require('./connection');

const msgPassw = {
  error: true,
  message: `O campo 'password' deve ter pelo menos 6 caracteres`
};

const msgFirstN = {
  error: true,
  message: `O campo 'firstName' deve ser uma string`
}

const msgLastN = {
  error: true,
  message: `O campo 'lastName' deve ser uma string`
}

const msgEmail = {
  error: true,
  message: `O campo 'firstName' deve ser uma string`
}

const isValid = ({ firstName, lastName, email, password }) => {
  const PASSWORD_REGEX = /[a-z0-0]{6,}/ig;
  const fields = [firstName, lastName, email, password];

  if (fields.includes(undefined) || fields.includes(null) || fields.includes('')) return false;

  return PASSWORD_REGEX.test(password);
}

const formatUser = (document) => {
  const { _id, password, ...user } = document;
  const formattedResult = { id: _id, ...user };
  return formattedResult;
};

const create = ({ firstName, lastName, email, password }) => {
  return connection()
    .then(
      (db) => db
        .collection('users')
        .insertOne({ firstName, lastName, email, password })
    )
    .then((result) => ({ id: result.insertedId, firstName, lastName, email }));
}

module.exports = {
  isValid,
  create,
}
