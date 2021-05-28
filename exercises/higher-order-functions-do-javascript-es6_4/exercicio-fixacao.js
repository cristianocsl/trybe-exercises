// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
// const numbersFilter = numbers.filter((number) => number % 2 === 0);
// const numberReduce = numbersFilter.reduce((result, number) => result + number);
// console.log(numberReduce);

// fazendo a soma fora em uma arrow function fora do reduce.
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const sumNumber = numbers
  .filter((number) => number % 2 === 0)
  .reduce((result, number) => (result + number));
  
console.log(sumNumber);
