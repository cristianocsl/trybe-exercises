const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600 ml', price: 5.0 },
  { id: 3, name: 'Suco 300 ml', price: 5.0 },
  { id: 4, name: 'Suco 1 l', price: 5.0 },
  { id: 5, name: 'Cerveja Lata', price: 5.0 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];
app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;

  const findedId = drinks.find((r) => r.id === parseInt(id));

  if(!findedId) return res.status(404).json({ message: "Receita não encontrada!"});

  return res.status(200).send(findedId);
});

app.get('/drinks/search', function(req, res) {
  const { name } = req.query;
  const drink = drinks.filter((dr) => dr.name.includes(name));

  if(!drink) return res.status(404).json({ message: 'Bebida não encontrada!' });
  
  res.status(200).json(drink);
});

app.put('/drinks/:id', function(req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const findedId = drinks.findIndex((d) => d.id === parseInt(id));

  if(findedId === -1) return res.status(404).json({ message: 'Bebida não encontrada!'});

  drinks[findedId] = { ...drinks[findedId], name, price };

  res.status(204).end();
})

app.listen(3001, () => console.log('Aplicação ouvindo na porta 3001'));
