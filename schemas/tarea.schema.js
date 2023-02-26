const { required } = require('joi');

const Joi= require('joi');

const id = Joi.number().integer(); //  podemos cambiarlo a number()
const nombre=Joi.string();
const fecha_creacion=Joi.date().timestamp()
const fecha_inicio_tarea=Joi.date();
const fecha_finalizacion_tarea=Joi.date();
const id_empleado = Joi.number().integer();
const id_estado = Joi.number().integer();


// paramentros opcionales
const categoria= Joi.string();

// const fecha_ingreso=Joi.date();
// const salario=Joi.number().integer();





// Schema endpoints

const createTareaSchema = Joi.object({
  nombre: nombre.required(),
  //fecha_creacion:fecha_creacion,
  fecha_inicio_tarea:fecha_inicio_tarea.required(),
  fecha_finalizacion_tarea:fecha_finalizacion_tarea.required(),
  id_empleado:id_empleado.required(),




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

const queryTareaSchema = Joi.object({
  categoria,
});

const idEstadoConditionSchema= Joi.object({
  // id_estado:id_estado.required().when('id_estado',{
  //   switch: [
  //     { is: 0, then: Joi.valid(1) },
  //     { is: 1, then: Joi.valid(2) },
  //     { is: 2, then: Joi.valid(3) }
  // ],
  // otherwise: Joi.valid(4)
  // })




});






module.exports ={createTareaSchema,updateTareaSchema,getTareaSchema,queryTareaSchema}
