const {Tarea,tareaSchema}= require('./tarea.model');

function setupModels(sequelize){
  Tarea.init(tareaSchema,Tarea.config(sequelize));
}

module.exports=setupModels;
