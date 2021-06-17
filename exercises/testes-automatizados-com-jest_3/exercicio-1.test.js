const { aleatorio } = require('./exercicio-1');
const { expect } = require('@jest/globals');

// Exercício 1
test('Testa a função aleatório', () => {
  aleatorio = jest.fn();
  mockReturnValue(10);
  expect(aleatorio()).toBe(10);
})