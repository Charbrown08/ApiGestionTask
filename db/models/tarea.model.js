const { Field } = require('pg-protocol/dist/messages');
const { Model, DataType, sequelize, DataTypes } = require('sequelize');

const TAREA_TABLE = 'tareas';

const tareaSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  fecha_creacion: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue:DataTypes.NOW,
  },
  fecha_inicio_tarea: {
    allowNull: false,
    type: DataTypes.DATEONLY,
  },
  fecha_finalizacion_tarea: {
    allowNull: false,
    type: DataTypes.DATEONLY,
  },
  id_empleado: {
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },

  id_estado: {
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  }
};

class Tarea extends Model{
  static associate(){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName:TAREA_TABLE,
      modelName:'Tarea',
      timestamps:false


    }
  }

}

module.exports = {TAREA_TABLE,tareaSchema,Tarea};
