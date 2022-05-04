interface Hero {
  _name: string;
  _power: string;
  _age: number;
  keyPhrase(param: string): string;
}

class Hero {
  constructor(name: string, power: string, age: number) {
    this._name = name;
    this._power = power;
    this._age = age;
  }

  keyPhrase(phrase: string) {
    return `${this._name} diz: ${phrase}`;
  }
}

const Hero1 = new Hero('Cristiano', 'Super força', 23);
const Hero2 = new Hero('Marta', 'Vodar', 28);

console.log(Hero1.keyPhrase('Olá, eu sou o Cristiano'));
console.log(Hero2.keyPhrase('Olá, eu sou a heroína'));

// extendendo a interface Hero para interface Human

interface Human extends Hero {
  _name: string;
  _power: string;
  _age: number;
  keyPhrase(param: string): string;
  _jobAsHuman: string;
  _bestFriend: string;
}

const human: Human = {
  _name: 'Cristiano',
  _power: 'Super força',
  _age: 23,
  _jobAsHuman: 'Programador',
  _bestFriend: 'Maria',
  keyPhrase(phrase: string): string {
    return `${this._name} diz: ${phrase}`;
  }
}

console.log(human.keyPhrase('Olá, eu sou o Cristiano'));
