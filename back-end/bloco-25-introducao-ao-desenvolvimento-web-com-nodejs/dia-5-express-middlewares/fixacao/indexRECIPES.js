const express = require('express');
// const { StatusCode } = require('http-status-codes')
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const authMiddleware = require('./auth-middleware');
// const cors = require('cors');
// app.use(cors());
app.get('/open', function (req, res) {
  res.send('Open!');
});

app.use(authMiddleware);

function validatePrice(req, res, next) {
  const { price } = req.body;
  if(!price || price < 0 || price !== 'number') return res.status(400).json({ message: 'Dados inválidos!'});

  next();
}

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (req, res) {
  res.status(200).json(recipes);
});

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;

  const findedId = recipes.find((r) => r.id === parseInt(id));

  if(!findedId) return res.status(404).json({ message: "Receita não encontrada!"});

  return res.status(200).send(findedId);
});

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  // const filteredRecipes = recipes.filter((rec) => rec.name.includes(name));
  const filteredRecipes = recipes.filter((rec) => rec.name.includes(name) && rec.price < parseInt(maxPrice) && rec.price >= minPrice);

  res.status(200).json(filteredRecipes);
  // res.send(recipes);
});

app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if(token.length !== 16) return res.status(401).json({ message: 'Invalid Token!'});

  res.status(200).json({ message: 'Valid Token!' });
});

// MÉTODO POST

app.post('/recipes', validatePrice, function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price });
  res.status(201).json({ message: 'Recipe created successfully!' });
});

// MÉTODO PUT

app.put('/recipes/:id', validatePrice, function (req, res) {
  const { id } = req.params; // forma de busca
  const { name, price } = req.body; // conteúdo a serem alterados
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if(recipeIndex === -1) return res.status(404).json({ message: 'Receita não encontrada!'});

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end(); // 204: indica que algo foi atualizado. 'end()': a resposta vai ser retornada sem nenhuma informação.
});

// MÉTODO DELETE

app.delete('/recipes/:id', function(req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id, 10));

  if(recipeIndex === -1) return res.status(404).json({ message: 'Receita não encontrada!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end(); // 204: requisição foi completada com sucesso.
})

app.listen(3001, () => console.log('Aplicação ouvindo na porta 3001'));
