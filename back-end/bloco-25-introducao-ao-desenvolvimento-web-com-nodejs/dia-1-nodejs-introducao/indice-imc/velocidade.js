const readline = require('readline-sync');

const calculaVelocidade = () => {
  
  const distancia = readline.questionInt('Digite a distância percorrida, em metros: ');
  
  const tempo = readline.questionInt('\nDigite o tempo gasto em segundos: ');
  
  
  const velocMedia = (distancia / tempo).toFixed(2);

  console.log(`A velocidade média é: ${velocMedia} m/s`);
}

calculaVelocidade();
