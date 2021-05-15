'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Heroes', [{
      name: 'Stéphane',
      superpower: 'Formateur extraordinaire',
      createdAt: new Date(), 
      updatedAt: new Date()
    },
    {
      name: 'Superman',
      superpower: 'Slip au dessus du pantalon',
      createdAt: new Date(), 
      updatedAt: new Date()
    },
    {
      name: 'Batman',
      superpower: 'Prendre des coups',
      createdAt: new Date(), 
      updatedAt: new Date()
    },
    {
      name: 'Luc Skywalker',
      superpower: 'Voyage dans l\'espace',
      createdAt: new Date(), 
      updatedAt: new Date()
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Heroes', null, {});
  }
};
