// aula ao vivo
const person = {
  name: 'Carol',
  lastName: 'Santos',
};


//criando nova propriedade: uma função pode ser passada como um valor. greet, nesse caso, executa a callback. agora essa propriedade é uma funlção;
person.greet = (callback) => {
  return callback(); //retorna a execução de callback por que tem (). esse nome callback
};
// falta criar a função que será a callback
// cumprimento formal:
const formalGreeting = () => {
  console.log('Boas vindas, sinta-se à vontade neste local!')
};
// passar a função formalgreeting como parâmetro
person.greet(formalGreeting);
// cumprimento mau-humorado:
const badMoodGreeting = () => {
  console.log('Não fale comigo.');
};
// person.greet(badMoodGreeting); //passar a função badmoodgreeting como parÂmetro
// adicionando condições para executar uma ou outra função. Isso evita chamar funções manualmente.
const greetinPeople = (person, mood) => {
  console.log(`Olá ${person.name}, como vai você?`);
  if (mood === 'formal') {
    person.greet(formalGreeting);
  } else {
    person.greet(badMoodGreeting);
  }
};

greetinPeople(person, 'xabalu');