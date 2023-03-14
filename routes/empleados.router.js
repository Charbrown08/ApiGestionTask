const express = require('express');
const router = express.Router();
const empleadosService = require('../services/empleados.service');

const validatorHandler = require('../middlewares/validator.handler');
const {
  createEmpleadoSchema,
   getEmpleadoSchema,
  update2EmpleadoSchema
} = require('../schemas/empleado.schema');

//instance of service

const service = new empleadosService();

//endpoint routes - finAll

router.get('/', async (req, res,next) => {
  try{
    const empleados = await service.find();
    res.json(empleados);
  }catch(error){
    next(error);
  }

});

//endpoint routes - finOne

router.get(
  '/:id',
  validatorHandler(getEmpleadoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const empleado = await service.findOne(id);
      res.json(empleado);
    } catch (error) {
      next(error);
    }
  }
);

//endpoint routes - create

router.post(
  '/',
  validatorHandler(createEmpleadoSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const nuevoEmpleado = await service.create(body);
      res.json(nuevoEmpleado);
    } catch (error) {
      next(error);
    }
  }
);

//endpoint routes - update

router.patch(
  '/:id',
  validatorHandler(getEmpleadoSchema, 'params'),
  validatorHandler(update2EmpleadoSchema,'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const empleado = await service.update(id, body);
      res.json(empleado);
    } catch (error) {
      next(error);
    }
  }
);

//endpoint routes - delete

router.delete(
  '/:id',
  validatorHandler(getEmpleadoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
