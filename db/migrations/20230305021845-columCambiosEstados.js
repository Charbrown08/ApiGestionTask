'use strict';

const { ESTADO_TABLE, EstadoSchema } = require('../models/estado.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(ESTADO_TABLE,'cambiosPermitidos',EstadoSchema.cambiosPermitidos);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(ESTADO_TABLE,'cambiosPermitidos');

  }
};
