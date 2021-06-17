const arq = require('./exercicio-1');

// Exercício 1
test('Testa a função aleatório', () => {
  arq.aleatorio = jest.fn()
    .mockReturnValue(10);

  expect(arq.aleatorio()).toBe(10);
  expect(arq.aleatorio).toHaveBeenCalled();
  expect(arq.aleatorio).toHaveBeenCalledTimes(1);
})

// Exercício 2
test('testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros', () => {
  arq.aleatorio = jest.fn()
    .mockImplementationOnce((a, b) => a / b);
  
  expect(arq.aleatorio(8, 2)).toBe(4);
  expect(arq.aleatorio).toHaveBeenCalled();
  expect(arq.aleatorio).toHaveBeenCalledTimes(1);
  expect(arq.aleatorio).toHaveBeenCalledWith(8, 2);
})

// Exercício 3
test('', () => {
  arq.aleatorio = jest.fn()
    .mockImplementationOnce((a, b, c) => a * b * c);
  
  expect(arq.aleatorio(2, 3, 2)).toBe(12);
  expect(arq.aleatorio).toHaveBeenCalled();
  expect(arq.aleatorio).toHaveBeenCalledTimes(1);
  expect(arq.aleatorio).toHaveBeenCalledWith(2, 3, 2);
})

// Exercício 4

