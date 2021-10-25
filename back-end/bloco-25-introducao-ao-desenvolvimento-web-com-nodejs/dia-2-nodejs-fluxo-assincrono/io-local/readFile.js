// const fs = require('fs');

// const nomeArquivo = 'meu-arquivo.txt';

// fs.readFile(nomeArquivo, 'utf8', (err, data) => {

//   if(err) {
//     console.error(`Não foi possível ler o arquivo ${nomeArquivo}\n Erro: ${err}`);
//     process.exit(1);
//   };

//   console.log(`Conteúdo do arquivo: ${data}`);

// });

//  importando ('fs').promises em vez de trabalhar com callbacks. Isso retorna Promises, o que torna seu uso muito mais recomendável.

const fs = require('fs').promises;
const nomeArquivo = 'meu-arquivo.txt';
fs.readFile(nomeArquivo, 'utf8')
  .then((data) => console.log(`Conteudo do arquivo: ${data}`))
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${nomeArquivo}\n Erro: ${err}`);
    process.exit(1);  // Encerra a execução do script e informa ao sistema operacional que houve um erro com código.
  });
