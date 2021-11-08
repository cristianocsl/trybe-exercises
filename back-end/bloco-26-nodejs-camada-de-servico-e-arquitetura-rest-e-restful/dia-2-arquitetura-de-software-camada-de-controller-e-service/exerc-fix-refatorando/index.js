const express = require('express');
const bodyParser = require('body-parser');
const middlewares = require('./middlewares');
const app = express();

const User = require('./models/User');

app.use(bodyParser.json());

app.post('/user', middlewares.createUser);

app.use(middlewares.error);

app.listen(3000, () => console.log('Ouvindo na porta 3000'));
