'use strict';

const {Tarea,TAREA_TABLE,TareaSchema}=require('./../models/tarea.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(TAREA_TABLE,TareaSchema);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.drop(TAREA_TABLE);

  }
};
