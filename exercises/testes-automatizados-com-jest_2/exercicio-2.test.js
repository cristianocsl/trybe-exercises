const { findUserById, getUserName } = require('./exercicio-2');

describe('getUserName - promise', () => {

  describe('Teste função findUserById', () => {
  
    it('Returna o user name', () => {
      expect.assertions(1);
      return getUserName(5)
        .then((data) =>  expect(data).toEqual('Paul'));
    })
  
    it('verifique o resultado da função getUserName para o caso em que o usuário não é encontrado', () => {
      expect.assertions(1);
      return getUserName(3)
      .catch((error) => {
        expect(error).toEqual({ error: 'User with 3 not found.' })
      })
    })
  })
})
