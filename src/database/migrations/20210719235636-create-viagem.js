'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Viagem', {
      idviagem: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      dataviagem:{
        type: Sequelize.STRING,
        allowNull: false
      },
      horapartida:{
        type: Sequelize.STRING,
        allowNull: false
      },
      origem:{
        type: Sequelize.STRING,
        allowNull: false
      },
      destino:{
        type: Sequelize.STRING,
        allowNull: false
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Viagem');
  }
};
