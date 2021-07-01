// const { jest } = require('@jest/globals'); // falhou quando esta linha estava ativada.
const arq1 = require('./fixacao-2');

// Exercício 1:
test('função subtrair', () => {
  arq1.subtrair = jest.fn();
  
  arq1.subtrair(); // O toHaveBeenCalled testa se a função foi chamada aqui.

  expect(arq1.subtrair).toHaveBeenCalled();
})

// Exercício 2:
test('função multiplicar', () => {
  arq1.multiplicar = jest.fn().mockReturnValue(10); // esqueceu mockReturnValue

  arq1.multiplicar();
  expect(arq1.multiplicar).toHaveBeenCalled();

  expect(arq1.multiplicar()).toBe(10);

})

// Exercício 3:
test('Função somar', () => {
  const mockSomar = jest.spyOn(arq1, 'somar');
  mockSomar.mockResolvedValue(5); // 
  
  mockSomar(2, 3);
  expect(mockSomar).toHaveBeenCalled();
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar).toHaveBeenCalledWith(2, 3);
  expect(mockSomar(2, 3)).resolves.toBe(5); // Por que aqui usa 'resolves'?
})

//Exercício 4
test('FUnção dividir', () => {
  const mockDividir = jest.spyOn(arq1, 'dividir');
  mockDividir.mockReturnValue(15); // Por que não é 'Once'? Por que 15? R. Encontre parâmetro cuja divisão seja 15: 30 / 2 = 15
  mockDividir.mockReturnValueOnce(2); // 10 / 5 = 2 | mockReturnValueOnce define um retorno e espera um toBe
  mockDividir.mockReturnValueOnce(5); // 15 / 3 = 5

  expect(mockDividir(10, 5)).toBe(2); // toBe esperado para o retorno definido
  expect(mockDividir).toHaveBeenCalled(); // testa a chamada
  expect(mockDividir).toHaveBeenCalledTimes(1); // testa qntas vezes a função foi chamada
  expect(mockDividir).toHaveBeenCalledWith(10, 5); // testa os parâmetros

  expect(mockDividir(15, 3)).toBe(5);
  expect(mockDividir).toHaveBeenCalled();
  expect(mockDividir).toHaveBeenCalledTimes(2);
  expect(mockDividir).toHaveBeenCalledWith(15, 3);

  expect(mockDividir(30, 2)).toBe(15);
  expect(mockDividir).toHaveBeenCalled();
  expect(mockDividir).toHaveBeenCalledTimes(3);
  expect(mockDividir).toHaveBeenCalledWith(30, 2);
})

//Exercício 5 - mockRestore()
test('Mock da função subtrair de modo que possa restaurar sua implementação original', () => {
  // implementação original
  // expect(arq1.subtrair(3, 2)).resolves.toBe(1); // NÃO EXISTE ESSA LINHA AQUI!

  // criando o mock e substituindo a implementação
  const mockSubtrair2 = jest.spyOn(arq1, 'subtrair');
  // mockImplementation((a, b) => a - b); // PRECISARIA USAR OUTRA OPERAÇÃO (+, *, /) PARA MUDAR A SUBTRAÇÃO.
  mockSubtrair2.mockImplementation((a, b) => a * b);
  // definindo o retorno padrão com valor 20:
  mockSubtrair2.mockReturnValue(20);

  // expect(mockSubtrair2(30, 10)).toBe(20) // como a função não é mais subtração, faz a multiplicação 4 * 5 = 20.
  expect(mockSubtrair2(5, 4)).toBe(20);
  expect(mockSubtrair2).toHaveBeenCalled();
  expect(mockSubtrair2).toHaveBeenCalledTimes(2); // no gabarito tem (1), mas o teste só aceita (2);
  expect(mockSubtrair2).toHaveBeenCalledWith(5, 4);

  // restaurando a implementação original
  // arq1.subtrair.mockRestore(); // ESSAS DUAS LINHAS NÃO ESTÃO CORRETAS.
  // expect(arq1.subtrair(3, 2)).resolves.toBe(1);

  // Restaurando a implementação original
  mockSubtrair2.mockRestore(); // a partir daqui o mockSubtrair2 passa a fazer uma subtração.
  mockSubtrair2.mockReturnValue(1) // 5 - 4 = 1.

  expect(mockSubtrair2(5, 4)).toBe(1);
  expect(mockSubtrair2).toHaveBeenCalled();
  expect(mockSubtrair2).toHaveBeenCalledTimes(1);
  expect(mockSubtrair2).toHaveBeenCalledWith(5, 4);
})