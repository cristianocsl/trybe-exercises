const rescue = require('express-rescue');
const UserModel = require('../models/User');

module.exports = [
  (req, _res, next) => {
    const { error } = UserModel.isValid(req.body);
    
    if (error) return next(error);

    next();
  },
  rescue(async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  const updatedData = { firstName, lastName, email, password };
  const user = await UserModel.userUpdate(id, updatedData);

  if (!user) return res.status(404).json({
    error: true,
    message: 'O campo \'password\' deve ter pelo menos 6 dígitos'
  })

  res.status(200).json(user);
})
];