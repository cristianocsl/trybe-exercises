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
  let input = document.querySelector('#id-data-inicio'); //array para teste

  // verifique a posição das barras (index 2 e 5)
  if (input[2] !== '/' || input[5] !== '/') {
    alert('Use barras ( / ) para separar dia, mês e ano!');
  }

  if (input.value === 0) {
    alert('A data não foi preenchida!');
  }

  let splitted = input.value.split('/');
  // separe os dois primeiros elementos em um único elemento de um array:
  let dia = splitted[0];
  if (dia < 0 || dia > 31) {
    alert('Dia inválido!');
  }
  // separe os elementos na posição mês (index 3 e 4) em um único elemento de um array:
  let mes = splitted[1];
  if (mes < 1 || mes > 12) {
    alert('Mês inválido!');
  }
  // separe os elementos na posição do ano (index 6, 7, 8 e 9)
  let ano = splitted[2];
  if (ano < 0) {
    alert('Ano inválido!');
  }
}
validacaoData();

function handleSubmit(event) {
  event.preventDefault();

  let validation = validateData();

  clearDivs();
}
