const boom = require('@hapi/boom');
const { Model, DataTypes, Sequelize } = require('sequelize');
const { EMPLEADO_TABLE } = require('./empleado.model');
const { ESTADO_TABLE } = require('./estado.model');

const TAREA_TABLE = 'tareas';

const TareaSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  fecha_creacion: {
    allowNull: false,
    type: DataTypes.DATEONLY,
    defaultValue: Sequelize.NOW,


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
    field: 'id_empleado',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: EMPLEADO_TABLE,
      key: 'id',
    },

    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },

  id_estado: {
    field: 'id_estado',
    allowNull: false,
    defaultValue: 1,
    type: DataTypes.INTEGER,
    references: {
      model: ESTADO_TABLE,
      key: 'id',
    },

    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

class Tarea extends Model {
  static associate(models) {
    this.belongsTo(models.Empleado, {
      as: 'empleado',
      foreignKey: 'id_empleado',
    }),
      this.belongsTo(models.Estado, { as: 'estado', foreignKey: 'id_estado' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TAREA_TABLE,
      modelName: 'Tarea',
      timestamps: false,

    };
  }
}

module.exports = { TAREA_TABLE, TareaSchema, Tarea };
