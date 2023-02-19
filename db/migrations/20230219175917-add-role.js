'use strict';

const {Empleado,EMPLEADO_TABLE, EmpleadoSchema}=require('./../models/empleado.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(EMPLEADO_TABLE,'role',EmpleadoSchema.role);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(EMPLEADO_TABLE,'role');


  }
};
