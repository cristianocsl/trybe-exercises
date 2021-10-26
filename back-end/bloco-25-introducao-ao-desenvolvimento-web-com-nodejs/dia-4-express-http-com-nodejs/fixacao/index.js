const express = require('express');
const app = express();
// const cors = require('cors');

// app.use(cors());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter((rec) => rec.name.includes(name) && rec.price < parseInt(maxPrice) && rec.price >= minPrice);

  res.status(200).json(filteredRecipes);
});

app.listen(3001, () => console.log('Aplicação ouvindo na porta 3001'));
