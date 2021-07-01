const { expect, test } = require('@jest/globals');
const { findAnimalsByType } = require('./exercicio-fixacao.js');

describe('Quando o tipo do animal, existe', () => {
  test('Retorne a lista de animais', () => {
    expect.assertions(2);
      return findAnimalsByType('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
    });
  });
})