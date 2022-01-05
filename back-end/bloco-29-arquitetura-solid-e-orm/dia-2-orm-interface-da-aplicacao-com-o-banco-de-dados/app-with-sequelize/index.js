const express = require('express');
const { Store } = require('./models');

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  Store.findAll().then((dados) => res.status(200).json(dados))
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Erro interno!!!' });
    });
});

app.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const store = await Store.findByPk(id);

    if(!store) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(store);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Erro interno!' });
  }
})

const PORT = 3000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));