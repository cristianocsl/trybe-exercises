const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const rescue = require('express-rescue');
// const router = express.Router();

const pongMiddl = (req, res) => res.status(200).json({ message: 'pong' });

const helloMiddl = (req, res) => {
  const { name } = req.body;
  return res.status(200).json({ message: `Hello, ${name}` });
};

const greetingsMiddl = (req, res) => {
  const { name, age } = req.body;
  if (age > 17) return res.status(200).json({ message: `Hello, ${name}` });
  if (age <= 17) return res.status(401).json({ message: 'Unauthorized' });
}

app.get('/ping', rescue(pongMiddl));
app.post('/hello', rescue(helloMiddl));
app.post('/greetings', rescue(greetingsMiddl));

app.use((err, _req, res, _next) => res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`));

app.listen(3000, () => console.log('Online na porta 3000'));