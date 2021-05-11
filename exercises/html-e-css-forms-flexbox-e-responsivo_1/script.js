const divPai = document.querySelectorAll('div');

function eraseButton() {
  const arrayInput = document.getElementsByTagName('input');
  for (let input = 0; input < arrayInput.length; input += 1) {
    const element = arrayInput[input];
    divPai.removeChild(element);
  }
}

const clickButtonErase = document.getElementById('limpar');
clickButtonErase.addEventListener('click', eraseButton);