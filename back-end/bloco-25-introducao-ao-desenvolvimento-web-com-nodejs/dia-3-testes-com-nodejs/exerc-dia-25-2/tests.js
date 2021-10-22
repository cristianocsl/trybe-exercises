const { expect } = require('chai');

const numNaturalFn = require('./numNaturalFn.js');

describe('Executa a função numNaturalFn', () =>{
  describe('quando o número for maior que 0', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = numNaturalFn(10);

        expect(resposta).to.be.a('string');
      });

      it('é igual a "positivo"', () => {
        const resposta = numNaturalFn(10);

        expect(resposta).to.be.equals('positivo');
      });
    });
  });

  describe('quando o número for menor que 0', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = numNaturalFn(-2);

        expect(resposta).to.be.a('string');
      });

      it('é igual a "negativo"', () => {
        const resposta = numNaturalFn(-2);

        expect(resposta).to.be.a('negativo');
      })

    });
  });
});
