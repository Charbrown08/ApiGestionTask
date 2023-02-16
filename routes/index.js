const express=require('express');

const empleadosRouter= require('./empleados.router');
const tareasRouter= require('./tareas.router');

function routerApi(app){

  const router=express.Router();
  app.use('/api/v1',router)



  router.use('/empleados',empleadosRouter);
  router.use('/tareas',tareasRouter);

}


module.exports=routerApi;

