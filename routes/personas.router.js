const express = require('express');



const router = express.Router();
const validatorHandler= require('../middlewares/validator.handler');


const {createPersonaSchema}=require('../schemas/persona.schema')

const personaService = require('../services/personas.service');

//instance of service

const service = new personaService();

router.post('/',
validatorHandler(createPersonaSchema,'body'),
async (req, res,next)=>{
  try{
  const body=req.body;
  const nuevaPersona=await service.create(body);
  res.json(nuevaPersona);
  }catch(error){
    next(error);
  }



})

// // endpoint routes - update
// router.patch('/:id',
// validatorHandler(getTareaSchema,'params'),
// validatorHandler(updateTareaSchema,'body'),
// async (req, res,next)=>{
//   try{
//   const {id}= req.params;
//   const body= req.body;
//   const tarea=await service.update(id,body);
//   res.json(tarea);
//   }catch(error){
//     next(error);

//   }

// });

// // endpoint routes - delete
// router.delete('/:id',
// validatorHandler(getTareaSchema,'params'),
// async (req, res,next)=>{
//   try {
//     const {id} = req.params;
//     const rta=await service.delete(id);
//     res.json(rta);

//   } catch (error) {
//     next(error);

//   }

// })

//endpoint routes - finAll

router.get('/', async (req, res,next) => {
  try{
    const personas = await service.find();
    res.json(personas);
  }catch(error){
    next(error);
  }

});

// //endpoint routes - finOne

// router.get(
//   '/:id',
//   validatorHandler(getEstadoSchema, 'params'),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       const estado = await service.findOne(id);
//       res.json(estado);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

module.exports = router;
