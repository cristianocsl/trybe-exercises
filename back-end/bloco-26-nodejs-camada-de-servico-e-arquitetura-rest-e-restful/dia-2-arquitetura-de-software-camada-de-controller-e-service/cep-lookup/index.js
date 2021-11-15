require('dotenv').config(); // as variávis de ambiente são carregadas
const express = require('express');
const app = express(); // cria a aplicação do express
const bodyParser = ('body-parser');
const CepController = require('./controllers');
const errorMiddleware = require('./middlewares/error.js')
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong!' });
});

app.get('/cep/:cep', CepController.findAddressByCep);

app.use (errorMiddleware);



app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));