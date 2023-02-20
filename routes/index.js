const express=require('express');

const empleadosRouter= require('./empleados.router');
const tareasRouter= require('./tareas.router');
const estadoRouter=require('./estados.router');
const { route } = require('./empleados.router');

function routerApi(app){

  const router=express.Router();
  app.use('/api/v1',router)



  router.use('/empleados',empleadosRouter);
  router.use('/tareas',tareasRouter);
  router.use('/estados',estadoRouter);

}


module.exports=routerApi;

