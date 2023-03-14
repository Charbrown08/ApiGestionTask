

const Joi= require('joi');


const id = Joi.number().integer(); //  podemos cambiarlo a number()
const nombre=Joi.string().trim();
const fecha_creacion=Joi.date().timestamp();
const fecha_inicio_tarea=Joi.date().iso();
const fecha_finalizacion_tarea=Joi.date().iso();
const id_empleado = Joi.number().integer();
const id_estado = Joi.number().positive();


// paramentros opcionales
const categoria= Joi.string();






// Schema endpoints

const createTareaSchema = Joi.object({
  fecha_creacion:fecha_creacion.max(Joi.ref('fecha_inicio_tarea')),
  nombre:nombre.required(),
  fecha_inicio_tarea:fecha_inicio_tarea.required(),
  fecha_finalizacion_tarea:fecha_finalizacion_tarea.required(),
  id_empleado:id_empleado.required()






})

const updateTareaSchema = Joi.object({
  nombre: nombre,
  fecha_inicio_tarea:fecha_inicio_tarea,
  fecha_finalizacion_tarea,
  id_empleado:id_empleado,
  id_estado:id_estado,



})

const getTareaSchema = Joi.object({
  id:id.required(),

})

const queryTareaSchema = Joi.object({
  categoria,
});









module.exports ={createTareaSchema,updateTareaSchema,getTareaSchema,queryTareaSchema}
