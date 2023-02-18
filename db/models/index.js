const {Tarea, TareaSchema } = require('./tarea.model');

function setupModels(sequelize) {
  Tarea.init(TareaSchema,Tarea.config(sequelize));
}
module.exports = setupModels;
