const { required } = require('joi');

const Joi= require('joi');

const id = Joi.string().uuid(); //  podemos cambiarlo a number()
const nombre=Joi.string();
const fecha_creacion=Joi.number().integer();
const fecha_inicio_tarea=Joi.number().integer();
const fecha_finalizacion_tarea=Joi.number().integer();
const id_empleado = Joi.string().uuid();
const id_estado = Joi.string().uuid();



// Schema endpoints

const createTareaSchema = Joi.object({
  nombre: nombre.required(),
  fecha_creacion:fecha_creacion.required(),
  fecha_inicio_tarea:fecha_inicio_tarea.required(),
  fecha_finalizacion_tarea:fecha_finalizacion_tarea.required(),
  id_empleado:id_empleado.required(),
  id_estado:id_estado.required



})

const updateTareaSchema = Joi.object({
  nombre: nombre,
  fecha_creacion:fecha_creacion,
  fecha_inicio_tarea:fecha_inicio_tarea,
  fecha_finalizacion_tarea:fecha_finalizacion_tarea,
  id_empleado:id_empleado,
  id_estado:id_estado



})

const getTareaSchema = Joi.object({
  id:id.required(),

})



module.exports ={createTareaSchema,updateTareaSchema,getTareaSchema}
