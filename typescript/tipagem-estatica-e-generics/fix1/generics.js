"use strict";
// exemplo sem generics
function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([1, 2, 3]);
let stringArray = getArray(['gato', 'cachorro', 'elefante']);
// tipo number inserido em array de strings
stringArray.push(33);
// tipo string inserido em array de numbers
numberArray.push('bird');
console.log(numberArray);
console.log(stringArray);
// exemplo com generics
function getArrayGenerics(items) {
    return new Array().concat(items);
}
let numberArrayGenerics = getArrayGenerics([1, 2, 3]);
// numberArrayGenerics.push('bird'); // erro gerado: O argumento do tipo 'string' não é atribuível ao parâmetro do tipo 'number'
numberArrayGenerics.push(33);
let stringArrayGenerics = getArrayGenerics(['Cristiano', 'Messi', 'Neymar']);
// mais de uma variável de tipo genérico
function identity(value, message) {
    console.log(message);
    return value;
}
let returnNumber = identity(10, 'Minha mensagem com 10 number');
let returnString = identity('10', 'Minha mensagem com 10 string');
let returnBoolean = identity(true, 'Minha mensagem com boolean');
function IdentityFunc(value, message) {
    console.log(message);
    return value;
}
let teste = IdentityFunc;
let returnNumber2 = teste(100, 'Minha mensagem');
// let returnString2 = teste('Minha mensage', 100); // erro gerado: O argumento do tipo 'string' não é atribuível ao parâmetro do tipo 'number'
class IdentityClass {
    constructor(value, message) {
        this._value = value;
        this._message = message;
    }
    getIdentity() {
        console.log(this._message);
        return this._value;
    }
}
let processor = new IdentityClass(10, 'Minha mensagem de classe');
processor.getIdentity();
