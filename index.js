const express=require('express');
const routerApi=require('./routes');
const {logErrors,errorHandler,boomErrorHandler,ormErrorHandler}=require('./middlewares/error.handler');
const cors=require('cors');
const {checkApiKey}=require('./middlewares/auth.handler');



const app = express();
const port= 3000;
app.use(express.json());

routerApi(app);

//midleware methodo post


app.get('/',(req,res)=>{
  res.send('Bienvenido al servidor');
});

app.get('/nueva-ruta',checkApiKey,(req,res)=>{
  res.send('Hola nueva ruta');
});



app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

//implementando los CORS para los dominios
const whitelist=['http://localhost:8080', 'http://gestiona.co'];
const options={
  origin:(origin,callback)=>{
    if(whitelist.includes(origin)){
      callback(null,true);
    }else{
      callback(new Error('Dominio no permitido'))
    }
  }
}

app.use(cors(options));
require('./utils/auth');



app.listen(port,()=>{
  console.log('Mi puerto de salida es '+ port)
})

