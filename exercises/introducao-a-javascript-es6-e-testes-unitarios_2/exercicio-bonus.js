// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

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

const allLessons = Object.assign({}, {lesson11, lesson22, lesson33}); 

// const contar = (obj, chave, valor) { //só precisa de um parâmentro (obj)
//   const array = Object.keys(obj);
//   for (let index in array) {
//     total += obj[array[index]].chave
//   }
// }

const numStudentsMath = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    if (obj[array[index]].materia === 'Matemática') {
      total += obj[array[index]].numeroEstudantes;
    }
  }
  return total;
}
console.log('Quantidade de estudantes que assistiram às aulas de matemática:', numStudentsMath(allLessons));

// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const relatorio = (obj, profString) => {
  // let aulas = 0; como matérias não são valores, tem que ser criada uma array vazia que recebe a matéria que o professor tal ensina.
  const materiasEnsinadas = [];
  let totEstudantes = 0;
  // const array = Object.keys(obj); // não entendi porque não funciona com Object.keys.
  const array = Object.values(obj);
  for (index in array) {
    // if (obj[array[index]].professor === profString) { //não entendi por que não usa obj[array[index]]
    if (array[index].professor === profString) {
      // aulas += obj[array[index]].materia; mesma explicação de let aulas = 0.
      materiasEnsinadas.push(array[index].materia);
      // totEstudantes += obj[array[index]].numeroEstudantes;//não entendi por que não usa obj[array[index]]
      totEstudantes += array[index].numeroEstudantes;
    }
  }
  return {lessons: materiasEnsinadas, estudantes: totEstudantes}
};
console.log(relatorio(allLessons, 'Maria Clara'));

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name)); // não entendi o que é getInfo. Deu erro: ReferenceError: getInfo is not defined.
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));