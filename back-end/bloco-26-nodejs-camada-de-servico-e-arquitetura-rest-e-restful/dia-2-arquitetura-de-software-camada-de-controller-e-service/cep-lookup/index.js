require('dotenv').config(); // as variávis de ambiente são carregadas
const express = require('express');
const bodyParser = ('body-parser');
const CepController = require('./controllers/Cep');
const errorMiddleware = require('./middlewares/error.js')
const PORT = process.env.PORT || 3000;

const app = express(); // cria a aplicação do express
app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong!' });
});

app.get('/cep/:cep', CepController.findAddressByCep);

app.post('/cep', CepController.create);

app.use (errorMiddleware);



app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));