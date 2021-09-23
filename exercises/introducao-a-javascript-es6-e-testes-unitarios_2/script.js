const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(customer1);

customer1.lastName = 'Faria';
console.log(customer1);

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

console.log(customer2);
customer2['lastName'] = 'Silva';
console.log(customer2);

// próximo exercício


const object = {

};
function addPropr(customer, key, value) {
  let newKey = key;
  const lastName = value;
  customer[newKey] = lastName;
  newKey = 'fullName';
  const fullName = `${customer.firstName} ${customer.lastName}`;
  customer[newKey] = fullName;
  console.log(customer);

}
addPropr('cliente', 'Nome', 'sobrenome');


const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);

// próximo

const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(customer1);

function adicionaPropr(customer1, chave, valor) {
 
  customer1.input = valor;
}
adicionaPropr(customer1, 'nomeFinal', 'Silva');
console.log(customer1);

// próximo

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = (student) => { // os objetos acima tem um número no final. ex.: student1.
  const arrayOfSkills = Object.keys(student);
  for(index in arrayOfSkills){
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);

// 


const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};
customer.endereco = 'Rua das Árvores'; // adiciona propriedade;
customer['Cidade'] = 'Rio Largo'; // adiciona propriedade;
// console.log(customer);
// console.log(typeof(customer)); // typeof() diz que tipo é
// console.log(Object.keys(customer)); // retorna um array de chaves
// console.log(Object.keys(customer).includes('age')); // verifica se inclui a chave 'age' no objeto 'customer'
// console.log(`Pessoa: ${Object.values(customer)}`); // retorna só os valores
console.log(`Pessoa: ${Object.entries(customer)}`); // retorna as chaves e os valores

// 

const books = {
  collection: 'The Lord of the Rings',
  book1: 'The Fellowship',
  book2: 'Two TOwers',
  book3: 'Return of the king',
}

const bookAuthor = {
  authorName: 'J. R. R. Tolkien',
  adress: 'Rua das Árvores',
}

Object.assign(books, bookAuthor); // copia as propriedades de 'bookAutor' para 'books'.
Object.assign(books, bookAuthor, bookAuthor2); // copia as propriedades de 'bookAutor' e de 'bookAutor2' para 'books'. Pode copiar quantas propriedades quiser.
console.log(books);

const booksClone = Object.assign({}, books); // faz um clone de um objeto 'books' existente em um novo objeto vazio
console.log(booksClone);