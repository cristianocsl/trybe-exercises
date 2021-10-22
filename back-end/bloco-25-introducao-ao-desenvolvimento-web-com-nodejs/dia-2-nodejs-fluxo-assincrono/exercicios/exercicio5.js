const fs = require('fs').promises;

// 5 Crie uma função que lê e escreve vários arquivos ao mesmo tempo.

const arrayToFile = async () => {

  const arrStrings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!'];

  // Utilizar a função map para criar um Array de Promises, cada um criando um arquivo

  const createFilePromises = arrStrings
    .map((str, ind) => 
      fs.writeFile(`./file${ind + 1}.txt`, str));
// Utilizar Promise.all para aguardar a escrita de todos os arquivos
  await Promise.all(createFilePromises);

  // Realizar a leitura dos arquivos criados
  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];

  const fileContents = await Promise.all(
    fileNames.map((fileName) => fs.readFile(fileName, 'utf8'))
  );

  // Concatenar o conteúdo dos arquivos e criar o arquivo novo

  const newFileContent = fileContents.join(' ');

  await fs.writeFile('./fileAll.txt', newFileContent);
}

arrayToFile();
