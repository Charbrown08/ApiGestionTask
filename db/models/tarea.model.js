
const{Model,DataTypes,Sequelize}=require('sequelize');
const { EMPLEADO_TABLE } = require('./empleado.model');

const TAREA_TABLE = 'tareas';

const TareaSchema = {
  id: {
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
    type:DataTypes.INTEGER
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
    unique:true,
  },
  fecha_creacion: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue:Sequelize.NOW
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
    field:'id_empleado',
    allowNull:false,
    type:DataTypes.INTEGER,
    references:{
      model:EMPLEADO_TABLE,
      key:'id'
    },

    onUpdate:'CASCADE',
    onDelete:'SET NULL'





  },

  id_estado: {
    allowNull: false,
    type: DataTypes.INTEGER,
  }
};

class Tarea extends Model{
  static associate(models){

    this.belongsTo(models.Empleado,{as:'empleado',foreignKey: 'id_empleado'})


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

module.exports = {TAREA_TABLE,TareaSchema,Tarea};
