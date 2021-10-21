const fs = require('fs').promises;

fs.writeFile('./meu-arquivo.txt', 'Este texto foi incluído com a função writeFile() e sobrescreveu o texto anterior!')
  .then(() => console.log('Texto adicionado com sucesso!'))
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });
