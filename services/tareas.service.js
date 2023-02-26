const boom = require('@hapi/boom');
const { required } = require('joi');
const { Estado } = require('../db/models/estado.model');
const sequelize = require('./../libs/sequelize');

const { models } = require('./../libs/sequelize');

class tareasService {
  constructor() {}

  async create(data) {
    const nuevaTarea = await models.Tarea.create(data);
    return nuevaTarea;
  }

  async find() {
    const tareas = await models.Tarea.findAll({
      // offset:0,
      // limit:4
    });
    return tareas;
  }

  //FIND ALL CATEGORIES

  //  async findCategoria() {
  //   const tareas= await models.Tarea.findAll({
  //     include: {
  //       model: Estado,
  //       as: 'estado',
  //       attributes:['categoria'],
  //       where:{
  //         categoria:['DESARROLLO']

  //       }

  //      }
  //     });
  //   return tareas;

  // }

  async findCategoria(query) {
    const options = {
      include: {
        model: Estado,
        as: 'estado',
        attributes: ['categoria'],
        where: {
          // categoria: ['DESARROLLO'],
        },
      },
    }

    const {categoria}=query;

    if(categoria){
      options.include.where.categoria=categoria;
    }

    const tareas = await models.Tarea.findAll(options);
    return tareas;
  }

  async findOne(id) {
    const tarea = await models.Tarea.findByPk(id, {
      include: ['empleado', 'estado'],
    });
    if (!tarea) {
      throw boom.notFound('Tarea no encontrada');
    }

    return tarea;
  }

  // // find byCategory

  // async findByCategoria(query) {
  //   const options = {
  //     include:['estado'],
  //     where:{}
  //   }

  //   const {categoria}=query;
  //   if(categoria){
  //     options.where.categoria=categoria

  //   }
  //   const tarea=await models.Tarea.findOne(options);
  //   return tarea;

  // }

  async update(id, changes) {
    const tarea = await this.findOne(id);

    const rta = await tarea.update(changes);
    return rta;
  }

  async delete(id) {
    const tarea = await this.findOne(id);
    await tarea.destroy();

    return { id };
  }
}

module.exports = tareasService;
