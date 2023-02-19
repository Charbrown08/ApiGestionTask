
const boom = require('@hapi/boom');



const {models} = require('./../libs/sequelize');

class tareasService {
  constructor() {
  }


  async create(data) {
    const nuevaTarea= await  models.Tarea.create(data);
    return nuevaTarea;

  }

  async find() {
    const rta = await models.Tarea.findAll();
    return rta;
  }

  async findOne(id) {
    const tarea= await models.Tarea.findByPk(id);
    if(!tarea){
      throw boom.notFound('Tarea no encontrada');
    }

    return tarea;

  }

  async update(id, changes) {
    const tarea= await this.findOne(id);
    const rta= await tarea.update(changes);
    return rta;

  }

  async delete(id) {
    const tarea= await this.findOne(id);
    await tarea.destroy();

    return {id};

  }
}

module.exports = tareasService;
