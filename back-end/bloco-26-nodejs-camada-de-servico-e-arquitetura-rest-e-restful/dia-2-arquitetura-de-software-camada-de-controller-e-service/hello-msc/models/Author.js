const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name === firstName)
    .join(' ');

  return {
    id, firstName, middleName, lastName
  };
};

const getAll = async () => {
  return connection()
    .then(
      (db) => db.collection('authors')
      .find()
      .toArray()
    )
    .then(
      (authors) => 
      authors.map(({ _id, firstName, middleName, lastName }) =>
        getNewAuthor({
          id: _id,
          firstName,
          middleName,
          lastName,
        })
      )
    );
};


