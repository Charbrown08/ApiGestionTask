'use strict';

const { EmpleadoSchema, EMPLEADO_TABLE } = require('../models/empleado.model');
const { ESTADO_TABLE, EstadoSchema } = require('../models/estado.model');
const {TAREA_TABLE,TareaSchema}=require('./../models/tarea.model');
const {PERSONA_TABLE,PersonaSchema}=require('./../models/persona.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(ESTADO_TABLE,EstadoSchema);
    await queryInterface.createTable(EMPLEADO_TABLE,EmpleadoSchema);
    await queryInterface.createTable(TAREA_TABLE,TareaSchema);
    await queryInterface.createTable(PERSONA_TABLE,PersonaSchema);


  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(EMPLEADO_TABLE);
    await queryInterface.dropTable(TAREA_TABLE);
    await queryInterface.dropTable(ESTADO_TABLE);
    await queryInterface.dropTable(PERSONA_TABLE);
  }

};
