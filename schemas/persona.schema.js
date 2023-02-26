const Joi= require('joi');

const id=Joi.number().integer();
const nombre= Joi.string();
const edad= Joi.number().integer().positive();
const email=Joi.string();

const createPersonaSchema = Joi.object({
  nombre:nombre.required,
  edad:edad.required,
  email:email.required
})



const getPersonaSchema=Joi.object({

})

module.exports = { createPersonaSchema,getPersonaSchema};
