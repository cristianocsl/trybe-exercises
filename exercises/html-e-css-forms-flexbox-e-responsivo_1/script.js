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

function dividir() {
  let input = document.getElementById('id-data-inicio');
  let dividir = input.value.split('/');
  let dia = dividir[0];
  let mes = dividir[1];
  let ano = dividir[2];
  
  if (dia < 0 || dia > 30) {
    return {
      message: 'Dia inválido'
    };
  }
}
dividir();
