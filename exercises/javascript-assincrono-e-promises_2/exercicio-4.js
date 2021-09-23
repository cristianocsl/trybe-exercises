const fetchPromise = () => { // Por que a função de baixo deve ser envolvida pela arrow function 'fetchPromise' ?
  const myPromise = new Promise((resolve, reject) => {

    const arrayRandon = Array.from(
      { length: 10 },
      () =>  Math.floor(Math.random() * 50) + 1
    );
    const sum = arrayRandon.map(number => number * number)
                       .reduce((number, acc) => number + acc, 0);
                       
    // const arrayRandon = [...Array(10)].
    // map(() => Math.floor(Math.random() * 50)).
    // map((item) => item * item);
  
    // const sum = arrayRandon.reduce((acc, current) => acc + current, 0);
    console.log(`Resultado da soma: ${sum}
  Condição de Sucesso: soma < 8000`); // linha para conferir valor da soma.
  
    sum < 8000 ? resolve(sum) : reject(); // resolve e reject devem ser invocadas sem parâmetro
  });
  
  myPromise
    .then((sum) => [2, 3, 4, 5, 10].map((item) => Math.floor(sum / item)))
    .then((newSum) => console.log(newSum))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))
  };
  
  fetchPromise(); // a função de fora deve ser invocada