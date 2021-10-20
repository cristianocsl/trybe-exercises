const readline = require('readline-sync');

const sorteio = () => {

  const numEscolhido = readline.questionInt('Escolha seu número da sorte entre 0 e 10, com número inteiro: ');

  const numSorteado = Math.floor(Math.random() * (11));

  if(numEscolhido === numSorteado) {
    console.log(`\nParabéns, número correto!`);
  } else {
    console.log(`\nOpa, não foi dessa vez. O número sorteado foi ${numSorteado}`);
  };
  
};

sorteio();

  const jogarNovamente = readline.question('\nQuer jogar mais uma vez? (s/n) ');

  if(jogarNovamente === 's') {
    sorteio();
  } else {
    return;
  };
