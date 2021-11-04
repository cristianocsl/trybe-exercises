const express = require('express');
const Author = require('./models/Author');
// const Book = require('./models/Book');
const app = express();

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
});

// app.get('/books', async (req, res) => {
//   const books = await Book.getAll();
//   res.status(200).json(books);
// });

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Não encontrado' });

  res.status(200).json(author);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));
