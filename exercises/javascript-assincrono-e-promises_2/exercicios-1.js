const fetchPromise = () => { // Por que a função de baixo deve ser envolvida pela arrow function 'fetchPromise' ?
const promise = new Promise((resolve, reject) => {

  const arrayRandon = [...Array(10)].
  map(() => Math.floor(Math.random() * 50)).
  map((item) => item * item);

  const sum = arrayRandon.reduce((acc, current) => acc + current, 0);
  console.log(`Resultado da soma: ${sum}
Condição de Sucesso: soma < 8000`); // linha para conferir valor da soma.

  sum < 8000 ? resolve() : reject(); // resolve e reject devem ser invocadas. Como não será usado o valor, resolve não recebe parâmetro.
});

promise
  .then(() => console.log(`Promise resolvida`))
  .catch(() => console.log('Promise rejeitada'))
};

fetchPromise(); // a função de fora deve ser invocada