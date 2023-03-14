const Joi= require('joi');

const id = Joi.number().integer(); //  podemos cambiarlo a number()
const nombre=Joi.string().trim();
const fecha_ingreso=Joi.date();
const rol=Joi.string().trim();
const salario=Joi.number().integer().positive();
const pass=Joi.string().trim();
const email=Joi.string().email();



// Schema endpoints

const createEmpleadoSchema = Joi.object({
  nombre: nombre.required(),
  fecha_ingreso:fecha_ingreso.required(),
  rol:rol.required(),
  salario:salario.required(),
  pass:pass.required(),
  email:email.required(),



})



const update2EmpleadoSchema = Joi.object({
  nombre,
  salario:salario,
  rol:rol,
  email,





})


const getEmpleadoSchema = Joi.object({
  id:id.required(),

})



module.exports ={createEmpleadoSchema,getEmpleadoSchema,update2EmpleadoSchema}

