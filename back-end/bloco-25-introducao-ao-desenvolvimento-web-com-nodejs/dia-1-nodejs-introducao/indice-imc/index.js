const readline = require('readline-sync');

// criar lista com scripts disponíveis
// guarda as informações de importação em objetos. Chave name, explica qual scritp vai rodar. Chave scrip contem o caminho para o script.

const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular Velocidade Média', script: './velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
];

let mensagem = scripts
  .map((item, index) => `${index + 1} - ${item.name}`);

  // Adicionamos uma linha a mais no começo da mensagem
mensagem.unshift('Escolha um número para executar o script correspondente');

// Juntamos todos os elementos em uma string, separando-os por uma quebra de linha
mensagem = mensagem.join('\n');

const scriptNumber = readline.questionInt(mensagem) - 1;

const script = scripts[scriptNumber];

if(!script) return console.log('Número inválido. Saindo.');

require(script.script);
