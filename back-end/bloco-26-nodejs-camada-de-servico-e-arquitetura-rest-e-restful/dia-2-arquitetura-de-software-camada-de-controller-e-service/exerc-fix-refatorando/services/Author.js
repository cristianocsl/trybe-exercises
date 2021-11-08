const Author = require('../models/Author');

// Cria uma string com o nome completo do autor
const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;
  
  const fullName = [firstName, middleName, lastName]
  .filter((name) => name)
  .join(' ');
  
  return { id, firstName, middleName, lastName, name: fullName };
};
