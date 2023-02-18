const { required } = require('joi');

const Joi= require('joi');

const id = Joi.number().integer(); //  podemos cambiarlo a number()
const nombre=Joi.string();
const fecha_creacion=Joi.date().timestamp()
const fecha_inicio_tarea=Joi.date();
const fecha_finalizacion_tarea=Joi.date();
const id_empleado = Joi.number().integer();
const id_estado = Joi.number().integer();



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
