'use strict';

const { EmpleadoSchema, EMPLEADO_TABLE } = require('../models/empleado.model');
const {Tarea,TAREA_TABLE,TareaSchema}=require('./../models/tarea.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(EMPLEADO_TABLE,EmpleadoSchema);
    await queryInterface.createTable(TAREA_TABLE,TareaSchema);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(EMPLEADO_TABLE);
    await queryInterface.dropTable(TAREA_TABLE);
  }

};
