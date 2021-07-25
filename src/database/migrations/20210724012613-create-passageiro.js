'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('Passageiro', { 
      idpassageiro:{
        type: Sequelize.INTEGER,
        allowNULL: false,
        autoIncrement: true,
        primaryKey: true
      },
      nome:{
        type: Sequelize.STRING,
        allowNULL: false
      },
      cpf:{
        type: Sequelize.STRING,
        allowNULL: false
      },
      rg:{
        type: Sequelize.STRING,
        allowNULL: false
      },
      telefone:{
        type: Sequelize.STRING,
        allowNULL: false
      }
    });
    
  },

  down: async (queryInterface) => {
    
    await queryInterface.dropTable('Passageiro');
    
  }
};
