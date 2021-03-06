const express = require('express');
const bodyParser = require('body-parser');
const Author = require('./services/Author');
const Book = require('./models/Book');
const BooksController = require('./controllers/BooksController');
const app = express();
app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);
  if (!author) return res.status(404).json({ message: 'Não encontrado' });
  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  const author = await Author.create(first_name, middle_name, last_name);

  if (!author) return res.status(400).json({ message: 'Dados inválidos' });

  res.status(201).json(author);
});

app.get('/books', BooksController.getAll);

app.get('/books/:id', BooksController.findById);

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;
  // const validation = await Book.isValid(title, author_id);
  console.log(req.body);

  if (!await Book.isValid(title, author_id)) return res.status(400).json({ message: 'Dados inválidos' });

  await Book.create(title, author_id);

  res.status(201).json({ message: 'Livro criado com sucesso!' });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));
