const rescue = require('express-rescue');
const UserModel = require('../models/User');

module.exports = [
  rescue(async (req, res) => {
    const users = await UserModel.findAll();

    if (!users) return res.status(404).json([]);

    res.status(200).json(users);
  }),
];
