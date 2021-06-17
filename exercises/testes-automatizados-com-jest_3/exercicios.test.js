const arq = require('./exercicios');
jest.mock('./exercicios'); // os testes do exercício 4 só funcionam quando tem essa linha.

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
test('Testes - exercício 3', () => {
  arq.aleatorio = jest.fn()
    .mockImplementationOnce((a, b, c) => a * b * c);
  
  expect(arq.aleatorio(2, 3, 2)).toBe(12);
  expect(arq.aleatorio).toHaveBeenCalled();
  expect(arq.aleatorio).toHaveBeenCalledTimes(1);
  expect(arq.aleatorio).toHaveBeenCalledWith(2, 3, 2);
})

// Exercício 4
describe('Testando implementações', () => {
  
  test('mockando função para receber um parâmetro e retornar em caixa baixa', () => {
    arq.stringUpC
      .mockImplementationOnce((string) => string.toLowerCase());
    
    expect(arq.stringUpC('LIMA')).toBe('lima'); // 1. testa se as letras ficam minúsculas.
    expect(arq.stringUpC).toHaveBeenCalled();
    expect(arq.stringUpC).toHaveBeenCalledTimes(1);
    expect(arq.stringUpC).toHaveBeenCalledWith('LIMA');
  });

  test('mockando função que recebe um parâmetro e retorna a última letra', () => {
    arq.stringUpCFirst.
      mockImplementationOnce((string) => string[string.length - 1]);
    
    expect(arq.stringUpCFirst('Cristiano')).toBe('o');
    expect(arq.stringUpCFirst).toHaveBeenCalled();
    expect(arq.stringUpCFirst).toHaveBeenCalledTimes(1);
    expect(arq.stringUpCFirst).toHaveBeenCalledWith('Cristiano');
  })
    
  test('mockando função que recebe 3 parâmetros e os concatena', () => {
    arq.stringConcat
      .mockImplementationOnce((string1, string2, string3) => `${string1}${string2}${string3}`);

    expect(arq.stringConcat('Cris', 'tia', 'no')).toBe('Cristiano');
    expect(arq.stringConcat).toHaveBeenCalled();
    expect(arq.stringConcat).toHaveBeenCalledTimes(1);
    expect(arq.stringConcat).toHaveBeenCalledWith('Cris', 'tia', 'no')
  });
});

// // Exercício 5 // Os testes deste exercício não funcionam quando tem essa linha de código: jest.mock('./exercicios'); 
// describe('testando implementações', () => {
//   test('mockando função para receber um parâmetro e retornar em caixa baixa', () => {
    
//     const first = jest.spyOn(arq, 'stringUpC').mockImplementation((string) => string.toLowerCase()); 

//     expect(first('LIMA')).toBe('lima'); // 1. testa se as letras ficam minúsculas.
//     expect(first).toHaveBeenCalled();
//     expect(first).toHaveBeenCalledTimes(1);
//     expect(first).toHaveBeenCalledWith('LIMA');

//     arq.stringUpC.mockRestore();
//     expect(arq.stringUpC('castro')).toBe('CASTRO');
//   });

//   // restaurando o mock
//   first.mockRestore();
//   expect(first('lima')).toBe('LIMA');
// })