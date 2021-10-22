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

        expect(resposta).to.be.equals('negativo');
      });
    });

    describe('quando o número for igual a 0', () => {
      describe('a resposta', () => {
        it('é uma "string"', () => {
          const resp = numNaturalFn(0)

          expect(resp).to.be.a('string');
        });
      });

      describe('a resposta', () => {
        it('é igual a "neutro"', () => {
          const resp = numNaturalFn(0);

          expect(resp).to.be.equals('neutro');
        });
      });
    });

    describe('quando o valor de entrada não for um número', () => {
      describe('a resposta é', () => {
        it('é uma string', () => {
          const resp = numNaturalFn('aaaa');

          expect(resp).to.be.a('string');
        });

        it('deve retornar a frase "o valor deve ser um número"', () => {
          const resp = numNaturalFn('aaaa');

          expect(resp).to.be.equals('o parâmetro deve ser um número');
        });
      });
    });
  });
});
