enum EyeColor {
  Black = 'Pretos',
  Blue = 'Azuis',
  Green = 'Verdes',
  Brown = 'Castanhos',
}

class Person {
  name: string;
  birthDate: Date;
  eyeColor: EyeColor;

  constructor(name: string, birthDate: Date, eyeColor: EyeColor) {
    this.name = name;
    this.birthDate = birthDate;
    this.eyeColor = eyeColor;
  }

  speak(): void {
    console.log(`${this.name} está falando...`);
  }

  eat(): void {
    console.log(`${this.name} está comendo...`);
  }

  walk(): void {
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
