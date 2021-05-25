// cria uma f que:
//1. recebe um núm
// 2. recebe uma f

const repeat = (number, callback) => {
  for (let count = 0; count < number; count += 1) {
    callback(); // esta f callback se aplica a qq f
  };
};

const xablau = () => console.log('HoFs são Maravilhosas!');

repeat(10, xablau);

const trybeProject = (score, callback) => {
  if (score >= 80) {
    callback();
  } else {
    console.log('Ainda faltam alguns requisitos para a sua aprovação.')
  };
};

// criando f para ser a callback
const scoreProject = () => {
  console.log('Parabéns, você obteve aprovação!');
  // outraFuncao();
  // outraFuncao();
};

trybeProject(81, scoreProject);
// trybeProject(81, () => console.log('Olá')); // também é possível colocar a função logo no parâmetro. Mas o mais recomendado é só chamar a função.
