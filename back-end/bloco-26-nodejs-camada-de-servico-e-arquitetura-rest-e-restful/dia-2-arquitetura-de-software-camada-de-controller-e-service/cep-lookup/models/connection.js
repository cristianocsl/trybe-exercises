const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'cristiano',
  password: 'shalom36',
  database: 'cep_lookup',
});

module.exports = connection;