'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Aeronave', {
      idaeronave: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      marca:{
        type: Sequelize.STRING,
        allowNull: false
      },
      modelo:{
        type: Sequelize.STRING,
        allowNull: false
      },
      prefixo:{
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Aeronave');
  }
};
