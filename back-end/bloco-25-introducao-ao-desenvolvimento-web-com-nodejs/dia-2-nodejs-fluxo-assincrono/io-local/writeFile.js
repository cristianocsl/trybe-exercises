const fs = require('fs').promises;

// fs.writeFile('./meu-arquivo.txt', 'Este texto foi incluído com a função writeFile() e sobrescreveu o texto anterior!')
//   .then(() => console.log('Texto adicionado com sucesso!'))
//   .catch((err) => {
//     console.error(`Erro ao escrever o arquivo: ${err.message}`);
//   });

  // Utilizando o async/await

// const writeFile = async () => {
//   try {
    
//     await fs.writeFile('./meu-arquivo.txt', 'Este texto foi incluído com a função writeFile() com uma arrow function assíncrona e sobrescreveu o texto anterior!');

//     console.log('Texto adicionado com sucesso!');

//   } catch (err) {

//     console.error(`Erro ao escrever o arquivo: ${err.message}`);

//   };
// };

// writeFile();

// Rodando promessas simultaneamente com Promise.all

// Promise.all([
//   fs.readFile('./arq1.txt'),
//   fs.readFile('./arq2.txt'),
//   fs.readFile('./arq3.txt'),
// ])
//   .then(([arq1, arq2, arq3]) => {
    
//     const fileSizeSum = arq1.byteLength + arq2.byteLength + arq3.byteLength;

//     console.log(`Tamanho total dos três arquivos: ${fileSizeSum}`);
//   })
//   .catch((err) => console.log(`Erro ao ler arquivos: ${err.message}`));

// fs.writeFile('./novo-arq3.txt', 'Criei este arquivo e adicionei nele este conteúdo com a flag wx', { flag: 'wx' })
//   .then(() => console.log('Novo arquivo criado e salvo!'))
//   .catch((err) => console.error(`${err}`));

fs.writeFile('./arq3.txt', 'Adicionei o conteúdo nesse arquivo com a flag wx', { flag: 'w' })
  .then(() => console.log('Arquivo salvo'))
  .catch((err) => console.error(`${err}`));
