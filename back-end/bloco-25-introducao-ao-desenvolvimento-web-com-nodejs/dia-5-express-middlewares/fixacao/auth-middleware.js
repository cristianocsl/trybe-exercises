const validUser = {
  username: 'mestrecuca',
  password: 'minhasenha'
};

function authMiddleware(req, res, next) {
  const { username, password } = req.headers;

  if(!username || !password) return res.status(401).json({ message: 'usuário ou senha não podem ser vazios!'});

  if(username !== validUser.username || password !== validUser.password) return res.status(401).json({ message: 'usuário ou senha inválidos!'});

  next();
};

module.exports = authMiddleware;
