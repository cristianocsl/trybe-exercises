const promise = new Promise((resolve, reject) => {

  const arrayRandon = [...Array(10)].
  map(() => Math.floor(Math.random() * 50)).
  map((item) => item * item);

  const sum = arrayRandon.reduce((acc, current) => acc + current, 0);

  // const condition = sum < 8000;
  // const falhaMsg = console.log(`Promise rejeitada`);
  // const sucessoMsg = console.log(`Promise resolvida`);
  console.log(`Resultado da soma: ${sum}
Condição de Sucesso: soma < 8000`); // linha para conferir valor da soma.
  const condition = sum < 8000
  if (!condition) {
    return reject(sum);
  }
  resolve(sum);
})
.then(() => `Promise resolvida`)
.then(msg => console.log(msg))
.catch(() => console.log(`Promise rejeitada`))