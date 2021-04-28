let string = 'arara';
function verificarPalindromo (string) { //aqui foi criada a função que recebe uma string
    let stringSepare = string.split();
    let stringReverse = stringSepare.reverse();
console.log(stringReverse);
for (let index = 0; index < stringReverse.length; index += 1) {
    if (string[index] == stringReverse[index]) {
        console.log('true');
    } else {
        console.log('false');
    }
}
};
