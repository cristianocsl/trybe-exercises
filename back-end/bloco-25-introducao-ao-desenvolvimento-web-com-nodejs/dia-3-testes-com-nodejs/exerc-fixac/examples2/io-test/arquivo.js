const fs = require('fs');
function arquivo(nomeArquivo) {
  try {
    const conteudoArq = fs.readFileSync(nomeArquivo, 'utf8');
    return conteudoArq;
  } catch (e) {
    return null
  }
}

module.exports = arquivo;
