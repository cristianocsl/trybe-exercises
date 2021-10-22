const fs = require('fs').promises;

// fs.readFile('./simpsons.json', 'utf8')
//   .then((conteudo) => JSON.parse(conteudo))
//   .then((arrSimpsons) => {
//     return arrSimpsons.map(({ id, name }) => `${id} - ${name}`);
//   })
//   .then((strings) => {
//     strings.forEach((string) => console.log(string));
//   });

  // Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

// const getSimpsonById = async (id) => {
//   try {
//     const response = await fs
//       .readFile('./simpsons.json', 'utf8')
//       .then((conteudo) => JSON.parse(conteudo));

//     const chosenSimpson = response
//       .find((simpson) => +simpson.id === +id);

//     console.log(chosenSimpson);
    
//     if(!chosenSimpson) {
//       throw new Error('id não encontrado');
//     };
    
//     return chosenSimpson;

//   } catch (e) {
//     console.log(e.message);
//   };
//       // console.log(chosenSimpson);
// // A palavra-chave `throw` dispara um erro que deve ser tratado por quem chamou nossa função. Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada, tendo como motivo o que passarmos para o `throw`. Ou seja, a linha abaixo rejeita a Promise da nossa função com o motivo 'id não encontrado'.
// }
// getSimpsonById(10);

// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

// const getSimpsonById = async () => {
//   try {
//     const response = await fs
//       .readFile('./simpsons.json', 'utf8')
//       .then((conteudo) => JSON.parse(conteudo));

//     const arraySimpsons = response
//       .filter((simpson) => +simpson.id !== +10 && +simpson.id !== +6);
    
//     await fs.writeFile('simpsons.json', JSON.stringify(arraySimpsons));

//     console.log(arraySimpsons);
    
//     if(!arraySimpsons) {
//       throw new Error('id não encontrado');
//     };
    
//     return arraySimpsons;

//   } catch (e) {
//     console.log(e.message);
//   };
      
//       console.log(arraySimpsons);


// // A palavra-chave `throw` dispara um erro que deve ser tratado por quem chamou nossa função. Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada, tendo como motivo o que passarmos para o `throw`. Ou seja, a linha abaixo rejeita a Promise da nossa função com o motivo 'id não encontrado'.

// }
// getSimpsonById();

// 4 Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.

// const createSimpsonsFamily = async () => {
//   try {
//     const response = await fs
//       .readFile('./simpsons.json', 'utf8')
//       .then((conteudo) => JSON.parse(conteudo));

//     // const arrayFamily = response
//     //   .filter((simpson) => +simpson.id === +1 || +simpson.id === +2 || +simpson.id === +3 || +simpson.id === +4);
  
//     const arrayFamily = response
//       .filter((simpson) => [+1, +2, +3, +4].includes(+simpson.id));
    
//     await fs.writeFile('simpsonFamily.json', JSON.stringify(arrayFamily))
//       .then(() => console.log('Arquivo salvo com sucesso!'))
//       .catch((e) => console.error(e));

//     console.log(arrayFamily);
    
//     if(!arrayFamily) {
//       throw new Error('id não encontrado');
//     };
    
//     return arrayFamily;

//   } catch (e) {
//     console.log(e.message);
//   };
// };

// createSimpsonsFamily();

// 4.5 Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .

// const addPersonage = async () => {
//   try {
//     const arrayFamily = await fs
//       .readFile('simpsonFamily.json', 'utf8')
//       .then((response) => JSON.parse(response))
//       .catch((e) => console.log(e));
    
//     arrayFamily.push({id: '8', name: 'Nelson Muntz'});

//     await fs.writeFile('simpsonFamily.json', JSON.stringify(arrayFamily));

//     console.log(arrayFamily);

//   } catch (e) {
//     console.log(e);
//   }
// }

// addPersonage();

// 4.6 Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .

// const replaceNelson = () => {
//   return fs.readFile('simpsonFamily.json', 'utf8')
//     .then((conteudo) => JSON.parse(conteudo))
//     .then((arrSimps) => arrSimps.filter((simps) => simps.id !== '8'))
//     .then((arrNotNelson) => arrNotNelson.concat([{ id: '8', name: 'Magie Simpson'}]))
//     .then((arrWithMagie) => fs.writeFile('simpsonFamily.json', JSON.stringify(arrWithMagie)));
// }

// MESMA FUNÇÃO COM ASYNC/AWAIT
const replaceNelson = async () => {
  const resp = await fs.readFile('simpsonFamily.json', 'utf8');
  const respToParse = JSON.parse(resp);
  const arrNotNelson = respToParse.filter((simps) => simps.id !== '8');
  const arrWithMagie = arrNotNelson.concat([{ id: '8', name: 'Magie Simpson'}]);
  const writeInFile = fs.writeFile('simpsonFamily.json', JSON.stringify(arrWithMagie));

  console.log(arrWithMagie);
  return writeInFile;

};

replaceNelson();
