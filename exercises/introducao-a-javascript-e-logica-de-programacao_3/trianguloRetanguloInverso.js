/*Atenção! Note que esse exercício é bem mais complexo que o anterior! 
Não basta, aqui, imprimir somente asteriscos. 
Você precisará de uma lógica para imprimir espaços também.*/

let n = 5;//quantidade de caracteres que compõem a base do triangulo
let asterisco = '*';//caractere de preenchimento
let inputLinha = ''; //cria um string vazio que receberá os caracteres
let inputPosicao = n;/*inputPosicao é a variável que irá controlar a coluna (posição) onde os asteriscos 
começarão a ser impressos em cada linha, onde 'n' é a base do triângulo. Esta variável será usada no laço interior
que foi criado com o proposição de passar em cada coluna (posição=caractere=coluna) da linha criada.*/
/* O primeiro laço imprimirá as linhas */
for (let indexLinha = 0; indexLinha < n; indexLinha += 1) {//identifico o índice do loop responsável pelas linhas como 'indexLInha'.
    /* o laço interno é responsável por controlar em qual posição=coluna estamos durante a linha definida no laço externo */
    for (let indexColuna = 0; indexColuna <= n; indexColuna += 1) {//indexColuna definido para percorrer as colunas.
        /**é preciso criar uma condição para saber se já estamos na coluna/posição onde queremos imprimir o asterisco. */
        if (indexColuna < inputPosicao){// enquanto indexColuna < inputPosicao faça... /**repare que inputPosicao = n = 5 é um número fixo. se continuar assim, todas as colunas serão preenchidas com espaço */
            inputLinha = inputLinha + ' ';// enquanto indexColuna < inputPosicao, insira um espaço na coluna/posição.
        } else {
            inputLinha = inputLinha + asterisco; // Se ocorrer que indexColuna > inputPosicao, insira um asterisco na coluna/posição.
        } //fim do loop interno.
    }
    console.log(inputLinha)//imprime a variável inputLinha que foi criada no loop interno.
    inputLinha = ''; /**Aqui, zeramos a string inputLinha no final do loop para que no próximo loop ela receba a nova disposição dos caracteres. Porém, fora do loop, essa variável já recebeu os valores do loop. */
    inputPosicao -= 1; /**diminui o valor do inputPosicao em 1 para que na próxima repetição eu começe a colocar os 
    asteriscos UMA POSIÇÃO ANTES em relação ao laço de repetição atual. Isso será feito no loop interno*/
};
