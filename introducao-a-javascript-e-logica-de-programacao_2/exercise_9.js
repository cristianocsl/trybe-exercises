/*Utilizando o array criado no exercício anterior 
imprima o resultado da divisão de cada um dos 
elementos por 2 .*/

let array = []; //inicia-se por uma array vazia
for (let index = 1; index < 26; index += 1) { //usa-se 'index', em vez de
                                                //'array[index]' por que o próprio index é o valor 1.
                                                // não entendi bem porque não 'array[index]'...
    array.push(index);//na própria array, no 1º ciclo será incluído o index = 1
}

for (let index = 0; index<array.length; index += 1) {
    array[index] = array[index] / 2;
}
console.log(array);

