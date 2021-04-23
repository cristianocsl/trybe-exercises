let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf('Serviços');

//console.log(menuServices);

let indexOfPortfolio = menu.indexOf('Portfólio');

//console.log(indexOfPortfolio);

menu.push('Contato');
//console.log(menu);

//Utilize o for para imprimir os elementos da lista groceryList com o console.log() :

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
//for (let index = 0; index < groceryList.length; index += 1) {
//    console.log(groceryList[index]);
//}

//for(let lista of groceryList) {
 //   console.log(lista);
//}

//let palavra = "abcd";
//for (let letras of palavra) {
 //   console.log(letras)
//}


/*let arrOfNumbers = [10, 20, 30];
for (let soma of arrOfNumbers) {
  soma += 1;
  console.log(soma);
}*/

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let nome of names) {
    console.log(nome);
}