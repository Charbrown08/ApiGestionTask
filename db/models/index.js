const {Tarea, TareaSchema } = require('./tarea.model');
const {Empleado , EmpleadoSchema} = require('./empleado.model');

function setupModels(sequelize) {
  Tarea.init(TareaSchema,Tarea.config(sequelize));
  Empleado.init(EmpleadoSchema,Empleado.config(sequelize));

  Empleado.associate(sequelize.models);
  Tarea.associate(sequelize.models);

}
module.exports = setupModels;
