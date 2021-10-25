// 1 Crie uma função que recebe três parâmetros retorna uma Promise .

const returnPromise = (a, b, c) => {
  return new Promise((resolve, reject) => {
    
    if(typeof a !== 'number'|| typeof b !== 'number' || typeof c !== 'number') {
      reject('Informe apenas números');
    };

    const soma = (a + b) * c;

    if(soma < 50) {
      return reject('Valor muito baixo');
    };

    resolve(console.log(soma));

  });

};

// returnPromise(10, 20, 2)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// returnPromise(10, 20, 'a')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

const aleatorio = () => {
  const a = Math.floor(Math.random() * 100 + 1);
  const b = Math.floor(Math.random() * 100 + 1);
  const c = Math.floor(Math.random() * 100 + 1);

  return { a, b, c };
};

const promise = async ({a, b, c}) => {
  try {
    await returnPromise(a, b, c);
  } catch (e) {
    console.error(`Deu erro ${e}`);
  };
};

promise(aleatorio());
