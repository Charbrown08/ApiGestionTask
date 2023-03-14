const Estado = require('./../db/models/estado.model');
const { models } = require('./../libs/sequelize');


async function  nombresEstados(estadoId){
  const estado = await models.Estado.findOne({
    where:{
      id:estadoId
    }
  })

  return estado.nombre;
}






module.exports =  nombresEstados
