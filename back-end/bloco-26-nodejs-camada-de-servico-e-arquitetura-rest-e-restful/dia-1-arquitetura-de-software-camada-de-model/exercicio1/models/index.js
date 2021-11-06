const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const User = require('./models/User');

app.use(bodyParser.json());

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
})
