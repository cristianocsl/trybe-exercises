const arq = require('./exercicio-5');

describe('testando implementações sobre a primeira função (stringUpC)', () => {
  test('mockando função para receber um parâmetro e retornar em caixa baixa', () => {
    const first = jest
      .spyOn(arq, 'stringUpC')
      .mockImplementation((string) => string.toLowerCase()); 

    expect(first('LIMA')).toBe('lima');
    expect(first).toHaveBeenCalled();
    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith('LIMA');

    arq.stringUpC.mockRestore();
    expect(arq.stringUpC('casa')).toBe('CASA');
  });
})