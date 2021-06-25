let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/*Utilizando for , descubra qual o menor 
valor contido no array e imprima-o;*/

for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {  // se o 2º elem for menor que o 1º elem. ...
        let position = array[index];        // atribua o 2º elem à variável 'position'.
        array[index] = array[secondIndex];  // atribua o 2º elem ao 1º elem. (troca posição do 2º pelo 1º elem)
        array[secondIndex] = position;            } // atribua o 2º ele à variável 'position'.
    }
  }
    console.log(array)