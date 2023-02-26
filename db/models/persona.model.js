const { Model, DataTypes, Sequelize } = require('sequelize');

const PERSONA_TABLE='personas';

const PersonaSchema={
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,

  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: false,
    validate:{
      isAlpha: true,

    }
  },

   edad:{
    allowNull: false,
    type: DataTypes.INTEGER,

  },
  email:{
    allowNull: false,
    type:DataTypes.STRING,
  }

}

class Persona extends Model{
  static associate(){ }

  static config(sequelize){
    return {
      sequelize,
      tableName:PERSONA_TABLE,
      modelName:'Persona',
      timestamps:false
    }

  }
}

module.exports = {PERSONA_TABLE,PersonaSchema,Persona}
