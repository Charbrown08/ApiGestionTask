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
    unique: false,
  },

  rol:{
    allowNull: false,
    type: DataTypes.STRING,


  },

   fecha_ingreso:{
    allowNull: false,
    type: DataTypes.DATEONLY,

  },
  salario:{
    allowNull: false,
    type:DataTypes.FLOAT,
    defaultValue:100,

  },
  pass:{
    allowNull: false,
    type:DataTypes.STRING,

  },
  email:{
    allowNull: false,
    type:DataTypes.STRING,
    defaultValue:"@mail.example.com",
    unique: true,

  }


}

class Empleado extends Model{
  static associate(models){
    this.hasMany(models.Tarea,{
      as:'tareas',
      foreignKey:'id_empleado'

    });


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
