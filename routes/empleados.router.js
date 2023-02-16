const express = require('express');
const router = express.Router();
const empleadosService = require('../services/empleados.service');

const validatorHandler = require('../middlewares/validator.handler');
const {
  createEmpleadoSchema,
  updateEmpleadoSchema,
  getEmpleadoSchema,
} = require('../schemas/empleado.schema');

//instance of service

const service = new empleadosService();

//endpoint routes - finAll

router.get('/', async (req, res) => {
  const empleados = await service.findAll();
  res.json(empleados);
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
  async (req, res) => {
    const body = req.body;
    const nuevoEmpleado = await service.create(body);
    res.json(nuevoEmpleado);
  }
);

//endpoint routes - update

router.patch(
  '/:id',
  validatorHandler(getEmpleadoSchema, 'params'),
  validatorHandler(updateEmpleadoSchema, 'body'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const empleado = await service.update(id, body);
      res.json(empleado);
    } catch (error) {
      res.status(404).json({
        Message: error.message,
      });
    }
  }
);

//endpoint routes - delete

router.delete(
  '/:id',
  validatorHandler(getEmpleadoSchema, 'params'),
  async (req, res) => {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.json(rta);
  }
);

module.exports = router;
