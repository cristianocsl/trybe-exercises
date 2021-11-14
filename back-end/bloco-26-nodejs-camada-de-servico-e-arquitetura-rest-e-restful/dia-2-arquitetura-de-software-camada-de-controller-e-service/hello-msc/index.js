const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const Author = require('./controllers/Author');
const Book = require('./controllers/Books');
const errorMiddleware = require('./middlewares/error');

app.use(bodyParser.json());

app.get('/authors', Author.getAll);
app.get('/authors/:id', Author.findById);
app.post('/authors', Author.create);

app.get('/books', Book.getAll);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));
