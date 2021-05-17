let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(index, cars[index]);
}

let car = {
    type: 'Fiat', //type, model e color são as propriedades declaradas que irão aparecer em console.log(index)
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }

  let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
}
//resultado: hamburguer, bife, acarajé;

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge'
  }
for (let index in names) {
    console.log('Olá '+names[index]);
}
/**Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e seu valor 'modelo: A3 Sedan, marca: Audi, ano:2020' . */
let carro = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  }
for (let index in carro) {
    console.log(index +':',' ' + carro[index]+',');
}