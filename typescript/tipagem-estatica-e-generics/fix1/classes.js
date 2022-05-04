"use strict";
var EyeColor;
(function (EyeColor) {
    EyeColor["Black"] = "Pretos";
    EyeColor["Blue"] = "Azuis";
    EyeColor["Green"] = "Verdes";
    EyeColor["Brown"] = "Castanhos";
})(EyeColor || (EyeColor = {}));
class Person {
    constructor(name, birthDate, eyeColor) {
        this.name = name;
        this.birthDate = birthDate;
        this.eyeColor = eyeColor;
    }
    speak() {
        console.log(`${this.name} está falando...`);
    }
    eat() {
        console.log(`${this.name} está comendo...`);
    }
    walk() {
        console.log(`${this.name} está andando...`);
    }
}
// instanciando Person e definindo novas propriedades de pessoas
const person1 = new Person('Cristiano', new Date(1990, 1, 1), EyeColor.Brown);
const person2 = new Person('João', new Date(1990, 1, 1), EyeColor.Brown);

console.log(person1);
person1.speak();

console.log(person2);
person2.speak();
