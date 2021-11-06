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


const isValidFirstName = (firstName) => {
  if (!firstName || typeof firstName !== 'string') return msgFirstN;
}

const isValidLastName = (lastName) => {
  if (!lastName || typeof lastName !== 'string')return msgLastN;

}

const isValidEmail = (email) => {
  if (!email || typeof email !== 'string' || email.length < 6) return msgEmail;
}

const isValidPassword = (password) => {
  if (!password || typeof password !== 'string') return msgPassw;
}

module.exports = {
  isValidFirstName,
  isValidEmail,
  isValidLastName,
  isValidPassword,
}
