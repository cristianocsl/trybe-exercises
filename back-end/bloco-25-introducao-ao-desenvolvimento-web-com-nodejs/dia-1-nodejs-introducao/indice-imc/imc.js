const readline = require('readline-sync');
// 1. Crie um script para calcular o Índice de Massa Corporal(IMC) de uma pessoa.

// const calculaImc = () => {
//   const peso = 71;
//   const altura = 1.71;
  
//   console.log(`Peso: ${peso}, Altura: ${altura}`);
  
//   const imc = (peso / Math.pow(altura, 2)).toFixed(2);

//   console.log(`IMC: ${imc}`);

// };

// calculaImc();

// Você já utilizou o pacote readline-sync para esse fim. Que tal utilizar o mesmo pacote?

// Substitua os valores fixos de peso e altura por dados informados pela pessoa ao responder as perguntas "Qual seu peso?" e "Qual sua altura?" no terminal.

const calculaImc = (peso, altura) => {
  
  const imc = (peso / Math.pow(altura, 2)).toFixed(2);

  console.log(`IMC: ${imc}`);

};

const inputPeso = () => readline.questionInt('Qual o seu peso? ');

const inputAltura = () => readline.questionInt('Qual a sua altura? ');

calculaImc(inputPeso(), inputAltura());
