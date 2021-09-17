// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Verifique se o array passado por parâmetro não sofreu alterações
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
      // throw Error('Não retorna o array esperado.')
    }
  }
  return newArr;
}

array1 = [1, 2, 3, 4];
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// const resultado = myRemove(array1,3);
// assert.deepStrictEqual(resultado, [1, 2, 4], 'O resultado esperado é [1, 2, 4], meu amigo!');

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// const resultado = myRemove(array1,3);
// assert.deepStrictEqual(resultado, [1, 2, 4], 'O resultado esperado é [1, 2, 4], meu amigo!');

// Verifique se o array passado por parâmetro não sofreu alterações
// const resultado = myRemove(array1,3);
// assert.notDeepStrictEqual(resultado, [1, 2, 3, 4], 'O resultado esperado é [1, 2, 3, 4], meu amigo!');

// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado. NÃO ENTENDI ESSA QUESTÃO.
const myList = [5, 6, 7, 8]; // DE ONDE VEM ESSA ARRAY? A QUESTÃO NÃO DIZ.
myRemove(myList, 5);
assert.deepStrictEqual(myList, [5, 6, 7, 8]);

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);