const express=require('express');

const empleadosRouter= require('./empleados.router');
const tareasRouter= require('./tareas.router');
const estadoRouter=require('./estados.router');
const personasRouter = require('./personas.router');
const authRouter = require('./auth.router');
const profileRouter = require('./profile.router');

function routerApi(app){

  const router=express.Router();
  app.use('/api/v1',router)



  router.use('/empleados',empleadosRouter);
  router.use('/tareas',tareasRouter);
  router.use('/estados',estadoRouter);
  router.use('/personas',personasRouter);
  router.use('/auth',authRouter);
  router.use('/profile',profileRouter);

}


module.exports=routerApi;

