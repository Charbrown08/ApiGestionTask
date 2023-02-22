const {Tarea, TareaSchema } = require('./tarea.model');
const {Empleado , EmpleadoSchema} = require('./empleado.model');
const { Estado, EstadoSchema } = require('./estado.model');

const { Persona, PersonaSchema } = require('./persona.model');

function setupModels(sequelize) {
  Tarea.init(TareaSchema,Tarea.config(sequelize));
  Empleado.init(EmpleadoSchema,Empleado.config(sequelize));
  Estado.init(EstadoSchema,Estado.config(sequelize));


  //
  Persona.init(PersonaSchema,Persona.config(sequelize));

  Empleado.associate(sequelize.models);
  Tarea.associate(sequelize.models);
  Estado.associate(sequelize.models);

}
module.exports = setupModels;
