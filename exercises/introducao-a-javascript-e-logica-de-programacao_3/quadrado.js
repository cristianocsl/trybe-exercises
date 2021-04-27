/*1- Para o primeiro exercício de hoje, faça um programa que, 
dado um valor n qualquer, seja n > 1 , imprima na tela um 
quadrado feito de asteriscos de lado de tamanho n . Por exemplo: */

let n = 5;
let inserirLinha = ''; //insere um string vazio
let asterisco = '*';

for (let index = 0; index < n; index += 1) { //
    inserirLinha += asterisco; //é o mesmo que 'inserirLinha = inserirLinha + asterisco'
};

for (let index = 0; index < n; index += 1) { //imprime a linha 'n' vezes (n=5)
    console.log(inserirLinha);
};
