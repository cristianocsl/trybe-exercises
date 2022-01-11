const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DATABASE,
});

module.exports = connection;