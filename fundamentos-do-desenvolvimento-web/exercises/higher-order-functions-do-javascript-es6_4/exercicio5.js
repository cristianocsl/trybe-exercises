const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {
  const callback = (acc, curr) => {
    const count = acc + curr.split('')
      .reduce((acumul, current) => {
      if (current === 'a' || current ==='A' ) return acumul + 1;
      return acumul;
    }, 0);
    return count;
  };

  const apareceA = names.reduce(callback, 0);
  return apareceA;
}

assert.deepStrictEqual(containsA(), 20);