/*Utilizando for , crie um array que vá 
de 1 até 25 e imprima o resultado;;*/

let array = []; //inicia-se por uma array vazia
for (let index = 1; index < 26; index +=1) { //usa-se 'index', em vez de
                                                //'array[index]' por que o próprio index é o valor 1.
                                                // não entendi bem porque não 'array[index]'...
    array.push(index);//na própria array, no 1º ciclo será incluído o index = 1
    }
    //soma = array.push(array[index]);
console.log(array);