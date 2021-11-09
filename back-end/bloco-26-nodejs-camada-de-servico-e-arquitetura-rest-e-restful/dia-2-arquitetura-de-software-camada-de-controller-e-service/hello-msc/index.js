const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const Author = require('./models/Author');

app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
})