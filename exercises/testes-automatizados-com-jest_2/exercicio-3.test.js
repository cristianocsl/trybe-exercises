const { findUserById, getUserName } = require('./exercicio-2');

describe('getUserName - promise', () => {

  describe('Teste função findUserById', () => {
  
    it('Retorna o user name', async () => {
      expect.assertions(1);
      const data = await getUserName(4);
      expect(data).toEqual('Mark');
    });
  });

  describe('', () => {

  })

  it('verifique o resultado da função getUserName para o caso em que o usuário não é encontrado', async () => {
        expect.assertions(1);
        try {
          const data = await getUserName(6);
        } catch (error) {
        expect(error).toEqual({ error: 'User with 6 not found.' });
      }
  });
});
