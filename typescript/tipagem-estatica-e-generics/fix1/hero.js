"use strict";
class Hero {
    constructor(name, power, age) {
        this._name = name;
        this._power = power;
        this._age = age;
    }
    keyPhrase(phrase) {
        return `${this._name} diz: ${phrase}`;
    }
}
const Hero1 = new Hero('Cristiano', 'Super força', 23);
const Hero2 = new Hero('Marta', 'Vodar', 28);
console.log(Hero1.keyPhrase('Olá, eu sou o Cristiano'));
console.log(Hero2.keyPhrase('Olá, eu sou a heroína'));
const human = {
    _name: 'Cristiano',
    _power: 'Super força',
    _age: 23,
    _jobAsHuman: 'Programador',
    _bestFriend: 'Maria',
    keyPhrase(phrase) {
        return `${this._name} diz: ${phrase}`;
    }
};
console.log(human.keyPhrase('Olá, eu sou o Cristiano'));
