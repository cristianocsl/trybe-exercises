// const { jest } = require('@jest/globals'); // falhou quando esta linha estava ativada.
const service = require('./fixacao-1'); // funcionou só com essa linha.

test("#randomRgbColor", () => {
  // testando se a função foi chamada
  service.randomRgbColor = jest.fn();
  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
});

// Porque assim não funciona?
// const { randomRgbColor } = require('./fixacao-1');
// test("#randomRgbColor", () => {
//   // testando se a função foi chamada
//   randomRgbColor = jest.fn();
//   randomRgbColor();
//   expect(randomRgbColor).toHaveBeenCalled();
// });