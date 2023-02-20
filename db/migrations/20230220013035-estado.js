'use strict';


const { ESTADO_TABLE, EstadoSchema } = require('../models/estado.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(ESTADO_TABLE,EstadoSchema);


  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(ESTADO_TABLE);

  }

};
