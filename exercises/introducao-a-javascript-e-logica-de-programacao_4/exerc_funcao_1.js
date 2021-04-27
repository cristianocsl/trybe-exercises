
function verificarPalindromo (string) { //aqui foi criada a função que recebe uma string
let inverte = string.reverse();

    if (string == inverte) {
        console.log('true');
    } else {
        console.log('false');
    };
};

console.log(verificarPalindromo(arara))