const { Model, DataTypes, Sequelize } = require('sequelize');

const EMPLEADO_TABLE='empleados';

const EmpleadoSchema={
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },

  role:{
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'trabajador'

  },

  fecha_ingreso:{
    allowNull: false,
    type: DataTypes.DATEONLY,

  },
  salario:{
    allowNull: false,
    type:DataTypes.FLOAT,
  }

}

class Empleado extends Model{
  static associate(){

  }
  static config(sequelize){
    return {
      sequelize,
      tableName:EMPLEADO_TABLE,
      modelName:'Empleado',
      timestamps:false
    }

  }
}

module.exports = {EMPLEADO_TABLE,EmpleadoSchema,Empleado}
