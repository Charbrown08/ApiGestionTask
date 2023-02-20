const express=require('express');

const router= express.Router();



const validatorHandler = require('../middlewares/validator.handler');
const {
  createEstadoSchema,
  getEstadoSchema,
} = require('../schemas/estado.schema');

const estadoService = require('../services/estados.service');

//instance of service

const service = new estadoService();




//endpoint routes - finAll

router.get('/', async (req, res,next) => {
  try{
    const estados = await service.find();
    res.json(estados);
  }catch(error){
    next(error);
  }

});

//endpoint routes - finOne

router.get(
  '/:id',
  validatorHandler(getEstadoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const estado = await service.findOne(id);
      res.json(estado);
    } catch (error) {
      next(error);
    }
  }
);

module.exports= router;
