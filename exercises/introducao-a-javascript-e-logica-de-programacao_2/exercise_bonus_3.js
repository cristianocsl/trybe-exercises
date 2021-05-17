let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/*Utilizando for , descubra qual o menor 
valor contido no array e imprima-o;*/
let multiplicacao = [];
for (let index = 0; index < array.length-1; index += 1) {
    multiplica = array[index]*array[index + 1];
    multiplicacao.push(multiplica);
/*      if (index > array[array.length-1]) { //ESSA PARTE NÃO CONSEGUI AINDA
        multiplica = array[array.length-1]*2;
        multiplicacao = push(multiplica);
      };*/
  };
console.log(multiplicacao);