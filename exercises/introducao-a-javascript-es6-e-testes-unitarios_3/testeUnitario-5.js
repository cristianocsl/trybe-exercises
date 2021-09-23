const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui

// assert.strictEqual(obj1, obj2);
// assert.notStrictEqual(obj1, obj3, 'Como os obj1 e obj2 não são idênticos, essa mensagem não será exibida, pois notStrictEqual retorna TRUE se os objetos NÃO são iguais.');
assert.notStrictEqual(obj3, obj2, 'Como os obj1 e obj2 não são idênticos, essa mensagem não será exibida, pois notStrictEqual retorna TRUE se os objetos NÃO são iguais.');