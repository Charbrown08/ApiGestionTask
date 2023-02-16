const Joi= require('joi');

const id = Joi.string().uuid(); //  podemos cambiarlo a number()
const nombre=Joi.string();
const fecha_ingreso=Joi.number().integer();
const salario=Joi.number().integer();


// Schema endpoints

const createEmpleadoSchema = Joi.object({
  nombre: nombre.required(),
  fecha_ingreso:fecha_ingreso.required(),
  salario:salario.required(),

})

const updateEmpleadoSchema = Joi.object({
  nombre: nombre,
  fecha_ingreso:fecha_ingreso,
  salario:salario

})

const getEmpleadoSchema = Joi.object({
  id:id.required(),

})



module.exports ={createEmpleadoSchema,updateEmpleadoSchema,getEmpleadoSchema}

