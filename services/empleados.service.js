const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const { Tarea } = require('../db/models/tarea.model');

const {models} = require('./../libs/sequelize');



class empleadosService {

//_______________________________________________________________

  async create(data) {
    const hash= await bcrypt.hash(data.pass,10);
    const nuevoEmpleado= await  models.Empleado.create({
      ...data,
      pass: hash
    });
    delete nuevoEmpleado.dataValues.pass;
    return nuevoEmpleado;
  }


  //_______________________________________________________________________

  async find() {
    const rta = await models.Empleado.findAll({
      attributes:['id','nombre','rol','email']
    });
    return rta;
  }

  //______________________________________________________________________________

  async findByEmail(email) {
    const rta = await models.Empleado.findOne({
           where: {email}
    });
    delete rta.dataValues.email;
    return rta;
  }

  //______________________________________________________________________________

  async findOne(id) {

    const empleado= await models.Empleado.findByPk(id,{
      attributes:['id','nombre','rol','email'],
      include:{
        model:Tarea,
        as:'tareas',
        attributes:['nombre']

      }
    });
    if(!empleado){
      throw boom.notFound('Empleado no encontrado');
    }

    return empleado;


  }

  //___________________________________________________________________________

  async update(id, changes) {
    const empleado= await this.findOne(id);
    const rta= await empleado.update(changes);
    return rta;
  }

  //____________________________________________________________________________________

  async delete(id) {
    const empleado= await this.findOne(id);
    await empleado.destroy();

    return {id};
  }

}

module.exports=empleadosService;
