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

// 3. Substitua os valores fixos de peso e altura por dados informados pela pessoa ao responder as perguntas "Qual seu peso?" e "Qual sua altura?" no terminal.

// 4. Agora temos um problema: peso não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.

const calculaImc = (peso, altura, nome) => {
  
  const imc = (peso / Math.pow(altura, 2)).toFixed(2);

  console.log(`Muito bem, ${nome}. Seu IMC é ${imc}`);

  if(imc < 18.5) {
    console.log(`Situação: Abaixo do peso (magreza)`);
    return;
  }

  if(18.5 <= imc && imc < 25) {
    console.log(`Situação: Peso normal`);
    return;
  }

  if(25 <= imc && imc < 30) {
    console.log(`Situação: Acima do peso (sobrepeso)`);
    return;
  }

  if(30 <= imc && imc < 35) {
    console.log(`Situação: Obesidade grau I`);
    return;
  }

  if(35 <= imc && imc < 40) {
    console.log(`Situação: Obesidade grau II`);
    return;
  }

  if(40 <= imc) {
    console.log(`Situação: Obesidade grau III e IV`);
    return;
  }

};

const inputName = () => readline.question('Qual é o seu nome? \n');

const nome = inputName();

const inputPeso = () => readline.questionFloat(`\nOi, ${nome}. Qual o seu peso, em kg? \n`);

const peso = inputPeso();

const inputAltura = () => readline.questionFloat(`\nEntendi ${nome}. \nSeu peso é ${peso}. \nQual a sua altura, em metros? \n`);

const altura = inputAltura();

calculaImc(peso, altura, nome);

// 5. Vamos sofisticar um pouco mais nosso script. Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra:

