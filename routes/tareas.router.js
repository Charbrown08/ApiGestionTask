const express = require('express');
const router = express.Router();
const tareasService = require('./../services/tareas.service');
const passport = require('passport');

const validatorHandler = require('../middlewares/validator.handler');
const {
  createTareaSchema,
  updateTareaSchema,
  getTareaSchema,
  queryTareaSchema,
  fechaValidationSchema
} = require('./../schemas/tarea.schema');

const{checkRoles}=require('./../middlewares/auth.handler')

const service = new tareasService();

// endpoint routes - findAll
router.get('/',
passport.authenticate('jwt', {session: false}),
checkRoles("admin","ingo"),
async (req, res, next) => {
  try {
    const tareas = await service.find();
    res.json(tareas);
  } catch (error) {
    next(error);
  }
});


//endpoint routes - finAllBycategoria

router.get(
  '/tareas/categoria',
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin','ingo'),
  validatorHandler(queryTareaSchema, 'query'),
  async (req, res, next) => {
    try {
      const tareas = await service.findCategoria(req.query);
      res.json(tareas);
    } catch (error) {
      next(error);
    }
  }
);

// endpoint routes - findOne
router.get(
  '/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin','ingo'),
  validatorHandler(getTareaSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const tarea = await service.findOne(id);
      res.json(tarea);
    } catch (error) {
      next(error);
    }
  }
);


//________________________________________________________

// endpoint routes - create
router.post(
  '/',
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin'),
  validatorHandler(createTareaSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const nuevaTarea = await service.create(body);
      res.json(nuevaTarea);
    } catch (error) {
      next(error);
    }
  }
);
//______________________________________________________________-
// endpoint routes - update
router.patch(
  '/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin'),
  validatorHandler(getTareaSchema, 'params'),
  validatorHandler(updateTareaSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const tarea = await service.update(id, body);
      res.json(tarea);
    } catch (error) {
      next(error);
    }
  }
);

// endpoint routes - delete
router.delete(
  '/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles(['admin']),
  validatorHandler(getTareaSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const rta = await service.delete(id);
      res.json(rta);
    } catch (error) {
      next(error);
    }
  }
);





module.exports = router;
