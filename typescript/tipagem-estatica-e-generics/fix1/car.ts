export enum Colors {
  BLACK = "Preta",
  WHITE = "Branca",
  RED = "Vermelha",
  SILVER = "Prata",
}

export enum Directions {
  LEFT = "Esquerda",
  RIGHT = "Direita",
}

export enum Doors {
  DRIVER = 'Da pessoa motorista',
  RIDER = 'Da pessoa passageiro',
  BEHIND_DRIVER = 'De trás da pessoa motorista',
  BEHIND_RIDER = 'De trás da pessoa passageiro',
}

export class Car {
  _make: string;
  _color: Colors;
  _doors: number;

  constructor(make: string, color: Colors, doors: number) {
    this._make = make;
    this._color = color;
    this._doors = doors;
  }

  turnOn(): void {
    console.log('Ligando o carro...');
  }

  turnOff(): void {
    console.log('Desligando o carro...');
  }

  turn(direction: Directions): void {
    console.log(`Virando para a ${direction}...`);
  }

  speedUp(): void {
    console.log('Acelerando o carro...');
  }

  speedDown(): void {
    console.log('Freando o carro...');
  }

  stop(): void {
    console.log('Parando o carro...');
  }

  honk(): void {
    console.log('Buzinando...  BIP BIP');
  }

  openTheDoor(door: Doors): void {
    console.log(`Abrindo a porta ${door}...`);
  }

  closeTheDoor(door: Doors): void {
    console.log(`Fechando a porta ${door}...`);
  }
}