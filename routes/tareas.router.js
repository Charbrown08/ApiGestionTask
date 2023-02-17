const express=require('express');
const router= express.Router();
const tareasService = require('./../services/tareas.service');

const validatorHandler = require('../middlewares/validator.handler');
const {
  createTareaSchema,updateTareaSchema,getTareaSchema
} = require('../schemas/tarea.schema');

const service = new tareasService();


// endpoint routes - findAll
router.get('/',async (req, res,next)=>{

  try{
    const tareas=await service.find();
    res.json(tareas)
  }catch(error){
    nex(error);
  }


})


// endpoint routes - findOne
router.get('/:id',
validatorHandler(getTareaSchema,'params'),
async (req, res,next)=>{
  try{
    const {id} = req.params;
    const tarea=await service.findOne(id);
    res.json(tarea);

  }catch(error){
    next(error);
  }


})


// endpoint routes - create
router.post('/',
validatorHandler(createTareaSchema,'body'),
async (req, res,next)=>{
  try{
    const body=req.body;
  const nuevaTarea=await service.create(body);
  res.json(nuevaTarea);
  }catch(error){
    next(error);
  }



})


// endpoint routes - update
router.patch('/:id',
validatorHandler(getTareaSchema,'params'),
validatorHandler(updateTareaSchema,'body'),
async (req, res,next)=>{
  try{
  const {id}= req.params;
  const body= req.body;
  const tarea=await service.update(id,body);
  res.json(tarea);
  }catch(error){
    next(error);

  }

});


// endpoint routes - delete
router.delete('/:id',
validatorHandler(getTareaSchema,'params'),
async (req, res,next)=>{
  try {
    const {id} = req.params;
    const rta=await service.delete(id);
    res.json(rta);


  } catch (error) {
    next(error);

  }

})

module.exports =router;
