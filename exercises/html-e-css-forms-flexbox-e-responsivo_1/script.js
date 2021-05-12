const divPai = document.getElementsByClassName('div');

function creatStateOptions() {
  let states = document.getElementById('id-estados');
  let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let index = 0; index < stateOptions.length; index += 1) {
    let createOptions = document.createElement('option');
    states.appendChild(createOptions).innerText = stateOptions[index];
    states.appendChild(createOptions).value = stateOptions[index];
  }
}
creatStateOptions();

function eraseButton() {
  const arrayInput = document.getElementsByTagName('input');
  for (let input = 0; input < arrayInput.length; input += 1) {
    const element = arrayInput[input];
    divPai.removeChild(element);
    console.log(element);
  }
}

const clickButtonErase = document.getElementById('limpar');
clickButtonErase.addEventListener('click', eraseButton);

function validacaoData() {
  let input = '30/05/2002';
if (input.value === 0) {
  return {
    message: 'A data não foi preenchida!'
  }
}

let splitted = input.value.split('/');
let day = splitted[0];
let month = splitted[1];
let year = splitted[2];

if(day < 0 || day > 30){
  return {
    message: 'Dia inválido'
  };
}

if(month < 0 || month > 12){
  return {
    message: 'Mês inválido'
  }
}

if(year < 0) {
  return {
    message: 'Ano inválido'
  };
}

return true;
}
validacaoData();
