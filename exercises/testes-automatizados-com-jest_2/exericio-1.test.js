const { expect, it } = require('@jest/globals')
const { uppercase } = require('./exericio-1')

it(`verifica se a funçã recebe 'test' e retorna 'TEST `, (done) => {
  uppercase('test', (str) => {
    expect(str).toBe('TEST');
    done();
  })
})