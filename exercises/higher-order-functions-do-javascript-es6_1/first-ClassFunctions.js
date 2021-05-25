const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

// repeat(5, console.log);
// repeat(5, console.table);
repeat(5, console.group);

// Construímos essa função para implementar um laço de repetição entre 0 e um número especificado via parâmetro ( number ) e para mostrar no console o valor da variável count de 0 a N ( number ). O console.log é uma função própria do JavaScript , mas veja que fica mais simples caso você precise substituir esta ação para console.table ou console.group .
// Vamos aumentar um pouco o nível de complexidade e visualizar como podemos ir construindo funções mais especializadas e bem definidas. Veja este exemplo:

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(3, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});

// Pegamos a nossa implementação do exemplo anterior e repassamos dois parâmetros ao chamarmos a função repeat , sendo:
// 1 - Um número até que ponto gostaríamos de testar, neste caso 3 ;
// 2 - Nossa ação que será executada quando chamada action(count) na nossa função repeat , neste caso uma função para testar nossos números.
// Veja que nosso segundo parâmetro é uma função que recebe o count como argumento, proveniente da execução do nosso action(count) dentro da função repeat . Deste modo, caso o count passe pela condição estabelecida para ser um número par, será executada a mensagem com os números que atendem ao critério.
// Pense agora que gostaríamos de testar quais números são ímpares. Veja como fica fácil ajustar a implementação:

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;

// Para fixar
// Vamos praticar com os seguintes exercícios:
// 1 - Crie uma função que retorne a string 'Acordando!!' ;
// 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:

// Ao chamar a função doingThings:

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
const doingThings = (func) => func ('Acordando!','Bora tomar café!','Partiu dormir!');

const wakeUp = () => console.log('Acordando!');
// wakeUp('Acordando!');

const takeCoffee = (string) => console.log(string);
takeCoffee('Bora tomar café!!');

console.log(doingThings(wakeUp));
console.log(doingThings(takeCoffee));

// aula ao vivo
const person = {
  name: 'Carol',
  lastName: 'Santos',
};

const greetinPeople = (person) => {
  console.log(`Olá ${person.name}, como vai você?`);
}