const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'cristiano',
  password: 'shalom36',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;
