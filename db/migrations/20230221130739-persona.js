'use strict';

const { PERSONA_TABLE, PersonaSchema } = require('../models/persona.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(PERSONA_TABLE,PersonaSchema);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(PERSONA_TABLE);

  }

};
