const boom = require('@hapi/boom');

const {models} = require('./../libs/sequelize');



class empleadosService {

  constructor() { }


  async create(data) {
    const nuevoEmpleado= await  models.Empleado.create(data);
    return nuevoEmpleado;
  }

  async find() {
    const rta = await models.Empleado.findAll();
    return rta;
  }

  async findOne(id) {

    const empleado= await models.Empleado.findByPk(id,{
      include:['tareas']
    });
    if(!empleado){
      throw boom.notFound('Empleado no encontrado');
    }

    return empleado;


  }

  async update(id, changes) {
    const empleado= await this.findOne(id);
    const rta= await empleado.update(changes);
    return rta;
  }

  async delete(id) {
    const empleado= await this.findOne(id);
    await empleado.destroy();

    return {id};
  }

}

module.exports=empleadosService;
