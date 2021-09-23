const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
function containsA() {
  const countA = names.reduce((acc, curr) => {
    const regex = /A/gi;
    let separado = curr.split('');
    const inReduce = separado.reduce((acum, corren) => {
      if (corren.match(regex)) return acum + 1;
        return acum;
    }, 0);
    const sum = acc + inReduce;
    return sum;
  }, 0);
  return countA;
}
console.log(containsA());
assert.deepStrictEqual(containsA(), 20);