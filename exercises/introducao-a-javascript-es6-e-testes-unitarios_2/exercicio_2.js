const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addNewKey = (obj, key, value) => { // obj, key, value nomenclatura de livre escolha
  obj[key] = value;
};
addNewKey(lesson2, 'turno', 'manhã'); // lesson2: destino. chave: 'turno'. valor: 'manhã'.
// console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listarKeys = obj => {
  console.log('Mostra as keys do objeto:', Object.keys(obj));
}
listarKeys(lesson2);

// Crie uma função para mostrar o tamanho de um objeto.

const tamObj = obj => Object.keys(obj).length;
console.log('Mostrar o tamanho de um objeto:', tamObj(lesson3));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listarValores = obj => {
  console.log('Mostra os valores das keys:', Object.values(obj));
}
listarValores(lesson2);

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

const lesson11 = { 
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};
const lesson22 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
  turno: 'noite',
};
const lesson33 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// const allLessons = Object.assign({}, lesson11, lesson22, lesson33); // sem as {} entre {lesson11, lesson22, lesson33}, o resultado é que o valor de uma chave sobrescreve a outra, de modo que só restará uma valor, pois as keys são as mesmas para objetos;
const allLessons = Object.assign({}, {lesson11, lesson22, lesson33}); 
console.log('Junta todos os objetos em um vazio:', allLessons);

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const totStudent = lesson33.numeroEstudantes + lesson22.numeroEstudantes + lesson11.numeroEstudantes;
console.log('Mostra o total de estudantes:', totStudent);

//outra solução para o mesmo exercício:

const sumStud = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
};
console.log('Soma total de estudantes:', sumStud(allLessons));

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

const valorPosic = (obj, posicao) => Object.values(obj)[posicao];
console.log('Obtem o valor da posição:', valorPosic(lesson1, 0));

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const verificaFunc = (obj, chave, valor) => {
  const array = Object.entries(obj); // array para varrer todas as entradas/propriedade do objeto.
  let eIgual = false;
  for (let index in array) {
    if (array[index][0] === chave && array[index][1] === valor) eIgual = true; // se na coluna de chaves existir uma chave que corresponda a 'materia' e, ao mesmo tempo, existir na coluna de valores um valor que corresponda a 'Matemática', eIgual recebe TRUE.
    console.log(`Estas são chaves: ${array[index][0]}`); // array[index] é a linha referente à coluna [0], que é a coluna de chaves.
    console.log(`Estes são valores: ${array[index][1]}`); // array[index] é a linha referente à coluna [1], que é a coluna de valores.
  }
  return eIgual;
};
console.log('Existe esse par key/value no objeto?', verificaFunc(lesson1, 'materia', 'Matemática'));