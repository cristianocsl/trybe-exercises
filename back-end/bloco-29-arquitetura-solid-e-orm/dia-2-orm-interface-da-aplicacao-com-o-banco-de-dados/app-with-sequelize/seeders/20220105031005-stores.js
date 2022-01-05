'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Stores', [
      {
        name: 'Magazine',
        description: 'Loja de eletrônicos.'
      },
      {
        name: 'Shopping Time',
        description: 'Loja de variedades'
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Stores', null, {});
  }
};
