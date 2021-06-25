// const greeting = (user) => console.log(`Welcome ${user}!`);

// greeting(); // Welcome undefined!

// // Uma solução seria:

// const greeting = (user) => {
//   const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
//   console.log(`Welcome ${userDisplay}!`);
// };

// greeting(); // Welcome usuário!

// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.

const multiply = (number, value) => {
  const defaultParam = typeof value === 'undefined' ? 1 : value;
  const mult = number * defaultParam;
  return mult;
};

console.log(multiply(8));

// maneira mais curta

const multiply = (number, value = 1) => {
  return number * value;
};

console.log(multiply(8));