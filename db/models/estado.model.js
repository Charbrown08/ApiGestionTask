const { Model, DataTypes, Sequelize } = require('sequelize');

const ESTADO_TABLE='estados';

const EstadoSchema={
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique:true,
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: false,
  },

   categoria:{
    allowNull: false,
    type: DataTypes.STRING,
    unique: false,
  }


}



class Estado extends Model{
  static associate(models){
    this.hasMany(models.Tarea,{
      as:'tareas',
      foreignKey:'id_estado'

    });


  }
  static config(sequelize){
    return {
      sequelize,
      tableName:ESTADO_TABLE,
      modelName:'Estado',
      timestamps:false
    }

  }
}

module.exports = {ESTADO_TABLE,EstadoSchema,Estado}
