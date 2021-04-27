/*Atenção! Note que esse exercício é bem mais complexo que o anterior! 
Não basta, aqui, imprimir somente asteriscos. 
Você precisará de uma lógica para imprimir espaços também.*/

let n = 5;
let inserirLinha = ''; //insere um string vazio
let asterisco = '*';
let espaços = '.';

for (let index = 0; index < n-1; index += 1) {
    inserirLinha += espaços; //é o mesmo que 'inserirLinha = inserirLinha + asterisco'
};
inserirLinha += asterisco;
console.log(inserirLinha);




/*for (let index = 0; index < n; index += 1) {
    inserirLinha += asterisco ;
}
console.log(inserirLinha);*/



