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

const getSimpsonById = async (id) => {
  try {
    const response = await fs
      .readFile('./simpsons.json', 'utf8')
      .then((conteudo) => JSON.parse(conteudo));

    const chosenSimpson = response
      .find((simpson) => +simpson.id === +id);

    console.log(chosenSimpson);
    
    if(!chosenSimpson) {
      throw new Error('id não encontrado');
    };
    
    return chosenSimpson;

  } catch (e) {
    console.log(e.message);
  };
      
      // console.log(chosenSimpson);


// A palavra-chave `throw` dispara um erro que deve ser tratado por quem chamou nossa função. Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada, tendo como motivo o que passarmos para o `throw`. Ou seja, a linha abaixo rejeita a Promise da nossa função com o motivo 'id não encontrado'.

}

getSimpsonById(10);
