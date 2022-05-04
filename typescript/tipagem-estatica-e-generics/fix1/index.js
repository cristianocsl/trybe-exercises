"use strict";
var StudentStatus;
(function (StudentStatus) {
    StudentStatus[StudentStatus["Active"] = 1] = "Active";
    StudentStatus[StudentStatus["Inactive"] = 2] = "Inactive";
    StudentStatus[StudentStatus["Paused"] = 3] = "Paused";
})(StudentStatus || (StudentStatus = {}));
let newStudentStatus = StudentStatus.Inactive;
console.log(newStudentStatus);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["OK"] = 200] = "OK";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    StatusCodes[StatusCodes["Unauthorize"] = 401] = "Unauthorize";
    StatusCodes[StatusCodes["PaymentRequired"] = 402] = "PaymentRequired";
    StatusCodes[StatusCodes["Forbidden"] = 403] = "Forbidden";
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
})(StatusCodes || (StatusCodes = {}));
const ok = StatusCodes.OK;
const indiceOk = StatusCodes['OK'];
const stringBadRequest = StatusCodes[400];
console.log(ok);
console.log(indiceOk);
console.log(stringBadRequest);
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Sunday"] = 1] = "Sunday";
    WeekDays[WeekDays["Monday"] = 2] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 3] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 4] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 5] = "Thursday";
    WeekDays[WeekDays["Friday"] = 6] = "Friday";
    WeekDays[WeekDays["Saturday"] = 7] = "Saturday";
})(WeekDays || (WeekDays = {}));
function printCoord(value) {
    console.log('O valor da coordenada x é:' + value.x);
    console.log('O valor da coordenada y é:' + value.y);
}
printCoord({ x: 100, y: 200 });
// Tipos de coleção
// Array:
let names = ['maçã', 'banana', 'laranja'];
// Tipos de coleção
// Tuplas:
let fullName = ['Cristiano', 'Lima'];
let person = ['Cristiano', 23];
let car = ['Ford', 2020, 'Fiesta'];
// Crie um type que represente uma função que recebe 2 valores numéricos e retorna a soma dos dois.
function sum(a, b) {
    return a + b;
}
// Tipos de coleção
// Unions:
function printCPF(cpf) {
    console.log('Seu CPF é: ' + cpf);
}
