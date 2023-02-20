const boom= require('@hapi/boom');

const {models}= require('./../libs/sequelize')

class estadoService{
  constructor(){

  }

  async create(data){
    const nuevoEstado= await models.create(data);
    return nuevoEstado;



  }

  async find() {
    const estados= await models.Estado.findAll();
    return estados;

  }

  async findOne(id) {
    const estado= await models.Estado.findByPk(id,{
      include:['tareas']
    });
    if(!estado){
      throw boom.notFound('Estado no Encontrado');
    }

    return estado;

  }


}

module.exports=estadoService
