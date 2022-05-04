// exemplo sem generics

function getArray(items: any[]): any[] {
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

function getArrayGenerics<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let numberArrayGenerics = getArrayGenerics([1, 2, 3]);

// numberArrayGenerics.push('bird'); // erro gerado: O argumento do tipo 'string' não é atribuível ao parâmetro do tipo 'number'
numberArrayGenerics.push(33);

let stringArrayGenerics = getArrayGenerics(['Cristiano', 'Messi', 'Neymar']);

// mais de uma variável de tipo genérico

function identity<T, U> (value: T, message: U): T {
  console.log(message);
  return value;
}

let returnNumber = identity(10, 'Minha mensagem com 10 number');

let returnString = identity('10', 'Minha mensagem com 10 string');

let returnBoolean = identity(true, 'Minha mensagem com boolean');


// usando generics com interfaces e clases

interface IdentityInterf<T, U> {
  (value: T, message: U): T;
}

function IdentityFunc<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

let teste: IdentityInterf<number, string> = IdentityFunc;

let returnNumber2 = teste(100, 'Minha mensagem');

// let returnString2 = teste('Minha mensage', 100); // erro gerado: O argumento do tipo 'string' não é atribuível ao parâmetro do tipo 'number'

class IdentityClass<T, U> {
  _value: T;
  _message: U;

  constructor(value: T, message: U) {
    this._value = value;
    this._message = message;
  }

  getIdentity(): T {
    console.log(this._message);
    return this._value;
  }
}

let processor = new IdentityClass<number, string>(10, 'Minha mensagem de classe');

processor.getIdentity();
