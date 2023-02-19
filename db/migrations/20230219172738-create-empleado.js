'use strict';
const {Empleado,EMPLEADO_TABLE, EmpleadoSchema}=require('./../models/empleado.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(EMPLEADO_TABLE,EmpleadoSchema);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(EMPLEADO_TABLE);
  }

};
