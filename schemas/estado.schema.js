const { required } = require('joi');

const Joi= require('joi');

const id = Joi.number().integer();
const nombre=Joi.string().max(100);
const categoria=Joi.string().max(250);





//Schema endpoints

const createEstadoSchema = Joi.object({
  nombre: nombre.required(),
  categoria: categoria.required(),



 })



const getEstadoSchema = Joi.object({
  id:id.required(),

})



module.exports ={createEstadoSchema,getEstadoSchema}
