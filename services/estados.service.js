const boom= require('@hapi/boom');

const {models}= require('./../libs/sequelize')

class estadoService{

  //FIND ALL CATEGORIES

  async find() {
    const estados= await models.Estado.findAll();
    return estados;

  }


  // FINONE ESTADO

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
