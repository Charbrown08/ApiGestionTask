const express=require('express');
const router= express.Router();
const tareasService = require('./../services/tareas.service');

const service = new tareasService();


// endpoint routes - findAll
router.get('/',async (req, res)=>{
  const tareas=await service.find();
  res.json(tareas)

})


// endpoint routes - findOne
router.get('/:id',async (req, res,next)=>{
  try{
    const {id} = req.params;
    const tarea=await service.findOne(id);
    res.json(tarea);

  }catch(error){
    next(error);
  }


})


// endpoint routes - create
router.post('/',async (req, res)=>{
  const body=req.body;
  const nuevaTarea=await service.create(body);
  res.json(nuevaTarea);

})


// endpoint routes - update
router.patch('/:id',async (req, res)=>{
  try{
  const {id}= req.params;
  const body= req.body;
  const tarea=await service.update(id,body);
  res.json(tarea);
  }catch(error){
    res.status(404).json({
      message: error.message
    })
  }



})


// endpoint routes - delete
router.delete('/:id',async (req, res)=>{
  const {id} = req.params;
  const rta=await service.delete(id);
  res.json(rta);

})

module.exports =router;
