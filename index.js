const express=require('express');
const routerApi=require('./routes');
const {logErrors,errorHandler,boomErrorHandler}=require('./middlewares/error.handler');
const cors=require('cors');



const app = express();
const port= 3000;
app.use(express.json());
routerApi(app);

//midleware methodo post


app.get('/',(req,res)=>{
  res.send('Bienvenido al servidor');
});

app.use(logErrors);
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



app.listen(port,()=>{
  console.log('Mi puerto de salida es '+ port)
})

