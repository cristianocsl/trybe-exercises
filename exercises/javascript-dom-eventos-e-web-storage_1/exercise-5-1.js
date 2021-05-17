 
/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */
// Exercício 1
function changeText() {
    let paragrafo = document.getElementsByTagName('p')[1];
    paragrafo.innerHTML = "Daqui dois anos... muito money, muito money, muito money!!!";
  }
  changeText();
  
  // Exercício 2
  function changeSquareToGreen() {
    let squareYellow = document.getElementsByClassName('main-content')[0];
    squareYellow.style.background = "rgb(76,164,109)";
  }
  changeSquareToGreen();
  
  // Exercício 3
  function changeSquareToWhite() {
    let squareRed = document.getElementsByClassName('center-content')[0];
    squareRed.style.background = "white";
  }
  changeSquareToWhite();
  
  // Exercício 4
  function correctTitle() {
    let title = document.getElementsByTagName('h1')[0];
    title.innerHTML = "Corrigindo título do exercício";
  }
  correctTitle();
  
  // Exercício 5
  function pTagMaiuscula() {
    let paragrafo = document.getElementsByTagName('p')[0];
    paragrafo.innerHTML = paragrafo.innerHTML.toUpperCase();
  }
  pTagMaiuscula();
  
  // Exercício 6
  function showParagrafo() {
    let paragraphs = document.getElementsByTagName('p');
        for (let index = 0; index < paragraphs.length; index += 1) {
          console.log(paragraphs[index].innerHTML);
        }
  }
  showParagrafo();
  
      