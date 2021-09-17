let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/*Utilizando for , descubra qual o menor 
valor contido no array e imprima-o;*/

let valorPossivel = numbers[0]; //variável que irá receber o
                        //maior valor entre dois elementos quando comparados

for (let index = 1; index < numbers.length; index +=1) {
    
    if (numbers[index] < valorPossivel) {
        valorPossivel = numbers[index]; //se a condição for falsa, o valor possível não muda, continuando o mesmo.
    } else {}
    }
    console.log(valorPossivel)