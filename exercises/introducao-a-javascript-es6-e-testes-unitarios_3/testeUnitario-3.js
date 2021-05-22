// A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

// const assert = require('assert');
// const { throws } = require('assert/strict');

// function myRemoveWithoutCopy(arr, item) {
//   for (let index = 0, len = arr.length; index < len; index += 1) {
//     if (arr[index] === item) {
//       arr.splice(index, 1); // a partir do índice index, exclui um elemento.
//       index -= 1;
//       len -= 1;
//     }
//   }

//   return arr;
// }

// implemente seus testes aqui

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
// array = [1, 2, 3, 4];
// const resultado = myRemoveWithoutCopy(array, 3);
// assert.deepStrictEqual(resultado, [1, 2, 4], 'o resultado esperado é [1, 2, 4]');

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]: DE FATO, NÃO RETORNARÁ, POIS O RESULTADO ESPERADO É [1, 2, 4]. Para mostrar que não retorna, usa-se assert.notDeepStrictEqual
function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}
// const assert = require('assert');
// const array = [1, 2, 3, 4];
// const resultado = myRemoveWithoutCopy(array, 3);
// assert.notDeepStrictEqual(resultado, [1, 2, 4], 'De fato, não retorna [1, 2, 3, 4]'); // desse modo, a mensagem de erro será mostrada, pois aqui, o resultado será FALSE , o que indica que a função testada não retornará o array que foi proposto para comparação.
// assert.notDeepStrictEqual(resultado, [1, 2, 3, 4], 'De fato, não retorna [1, 2, 3, 4]');

// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações

const assert = require('assert');
const array = [1, 2, 3, 4];
const resultado = myRemoveWithoutCopy(array, 1); // porque 1?
assert.strictEqual(resultado.length, 3, 'Se o tamanho de resultado.length for estritamente igua a 3, então o array passado por parâmetro não sofreu alterações. Portanto, esta mensagem não será exibida, pois o resultado do assert é TRUE, e sendo TRUE, não é mostrado nenhum valor de output');

