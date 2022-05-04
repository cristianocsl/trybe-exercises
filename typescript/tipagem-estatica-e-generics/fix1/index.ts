enum StudentStatus {
  Active = 1,
  Inactive,
  Paused,
}

let newStudentStatus: StudentStatus = StudentStatus.Inactive;

console.log(newStudentStatus);

enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorize,
  PaymentRequired,
  Forbidden,
  NotFound,
}

const ok = StatusCodes.OK;
const indiceOk = StatusCodes['OK'];
const stringBadRequest = StatusCodes[400];

console.log(ok);
console.log(indiceOk);
console.log(stringBadRequest);

enum WeekDays {
  Sunday = 1,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

// Type Aliases

type Point = {
  x: number;
  y: number;
}

function printCoord(value: Point) {
  console.log('O valor da coordenada x é:' + value.x);
  console.log('O valor da coordenada y é:' + value.y);
}

printCoord({ x: 100, y: 200 });

// Tipos de coleção
// Array:

let names: string[] = ['maçã', 'banana', 'laranja'];

// Tipos de coleção
// Tuplas:

let fullName: [string, string] = ['Cristiano', 'Lima'];

let person: [string, number] = ['Cristiano', 23];

let car: [string, number, string] = ['Ford', 2020, 'Fiesta'];

// crie type para um objeto que representa um cachorro:
type Dog = {
  name: string;
  age: number;
}

// Crie um type que represente uma função que recebe 2 valores numéricos e retorna a soma dos dois.

function sum(a: number, b: number)
: number {
  return a + b;
}

// Tipos de coleção
// Unions:

function printCPF(cpf: string | number) {
  console.log('Seu CPF é: ' + cpf);
}
