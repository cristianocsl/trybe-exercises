require('dotenv').config(); // as variávis de ambiente são carregadas
const express = require('express');
const app = express(); // cria a aplicação do express
const PORT = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong!' });
});

app.get('/cep/:cep', (req, res) => {
  const { cep } = req.params;

})



app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));