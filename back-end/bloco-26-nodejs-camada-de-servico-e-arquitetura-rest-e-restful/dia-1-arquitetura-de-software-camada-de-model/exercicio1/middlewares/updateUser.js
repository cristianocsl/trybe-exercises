const rescue = require('express-rescue');
const UserModel = require('../models/User');

module.exports = rescue(async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  const user = await UserModel.findUserById(id);

  if (!user) return res.status(404).json({
    error: true,
    message: 'O campo \'password\' deve ter pelo menos 6 dígitos'
  })
});