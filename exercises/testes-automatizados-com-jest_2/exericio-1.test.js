const { expect, it } = require('@jest/globals')
const { uppercase } = require('./exericio-1')

it(`verifica se a funçã recebe 'test' e retorna 'TEST `, (done) => {
  uppercase('cristiano', (str) => {
    expect(str).toBe('CRISTIANO');
    done();
  })
})