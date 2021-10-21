const readline = require('readline-sync');

const fibonacci = (n) => {
// a armazena o último número que calculamos (n - 1)
  let a = 1;
// a armazena o penúltimo número que calculamos (n - 2)
  let b = 1;

// Repetimos o loop enquanto `n` for maior que 0
  for (; n >= 0; n--) {
    if(b) console.log(b);

// Armazenamos o último valor calculado em uma variável temporária
    const temp = a;
// Para calcular o novo valor, somamos o último valor com o penúltimo valor
// O novo valor é armazenado em `a`, já que ele passa a ser o último valor calculado
    a = a + b;
// O valor antigo de `a`, que estava armazenado na variável temporária agora se torna o penúltimo número e, por isso, é armazenado em `b`
   b = temp;
    
  };

  console.log(b);
  return b;
};

const chamaFibonacci = () => {
  
  const n = readline.questionFloat('Escolha um número máximo para a sequência de fibonnacci: ');

  if(n <= 0) {
    console.log('Digite um número maior que 0!');
    return;
  };

  console.log(`n: ${n}`);
  
  fibonacci(n - 2);
}

chamaFibonacci();
