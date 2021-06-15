const { sum, myRemove, myRemoveWithoutCopy } = require('./exercicio-1');


describe('Testes da função sum', () => {

  it('1. Teste se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4,5)).toBe(9);
  })

  it('2. Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0,0)).toBe(0);
  })

  it('3. Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => {
      sum(4,'5');
    }).toThrow(); // apenas teste se um erro é lançado.
  })

  it('4. Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => {
      sum(4,'5');
    }).toThrow(/parameters must be numbers/); // teste se aparece a frase quando o erro é lançado.
  })
});

// testes da função myRemove

const func1 = myRemove([1, 2, 3, 4], 3);
//  teste 3
const myList = [5, 6, 7, 8];
const func2 = myRemove(myList, 5);

describe('Testes da função myremove', () => {

  it('1. Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(func1).toEqual([1, 2, 4]);
  });
  
  it('2. Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(func1).not.toEqual([1, 2, 3, 4])
  });

  it('3. Verifique se o array passado por parâmetro não sofreu alterações', () => {
    expect(myList).toEqual([5, 6, 7, 8]);
  });
  
});
// implemente seus testes aqui