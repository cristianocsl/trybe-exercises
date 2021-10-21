const readline = require('readline-sync');

const fatorial = (numero) => {
  const resultado = numero === 0 
    ? 1
    : numero * fatorial(numero - 1);
    
    return resultado;
};

const retornaFatorial = () => {

  const numero = readline.questionInt('Digite o número de fatorial: ');
  
  if(numero < 0) {
    console.log(`${numero} não é um número válido. Digite um valor positivo.`);
    
    return;
  };
  
  const resultadoFatorial = fatorial(numero);
  
  console.log(`O resultado do fatorial de ${numero} é ${resultadoFatorial}.`);
};

retornaFatorial();
