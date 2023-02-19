const Joi= require('joi');

const id = Joi.number().integer(); //  podemos cambiarlo a number()
const nombre=Joi.string();
const fecha_ingreso=Joi.date();
const salario=Joi.number().integer();
const role=Joi.string();


// Schema endpoints

const createEmpleadoSchema = Joi.object({
  nombre: nombre.required(),
  fecha_ingreso:fecha_ingreso.required(),
  salario:salario.required(),
  role:role.required(),

})

const updateEmpleadoSchema = Joi.object({
  nombre: nombre,
  fecha_ingreso:fecha_ingreso,
  salario:salario,
  role:role

})

const getEmpleadoSchema = Joi.object({
  id:id.required(),

})



module.exports ={createEmpleadoSchema,updateEmpleadoSchema,getEmpleadoSchema}

