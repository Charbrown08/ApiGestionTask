const faker= require('faker');
const boom = require('@hapi/boom');

class tareasService{
  constructor(){

    this.tareas=[];
    this.generate();


  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.tareas.push({
        id: faker.datatype.uuid(),
        nombre: faker.commerce.productName(),
        fecha_creacion: parseInt(faker.commerce.price(), 10),
        fecha_inicio_tarea: parseInt(faker.commerce.price(), 10),
        fecha_finalizacion_tarea: parseInt(faker.commerce.price(), 10),
        id_empleado:faker.datatype.uuid(),
        id_estado:faker.datatype.uuid(),
      });
    }

  }

  async create(data){
    const nuevaTarea={
      id:faker.datatype.uuid(),
      ...data,
    };
    this.tareas.push(nuevaTarea);
    return nuevaTarea;
  }

  async find(){
    return this.tareas;

  }


  async findOne(id){
    const tarea= this.tareas.find((item) => item.id === id);
    if(!tarea){
      throw boom.notFound('id tarea No encontrada');
    }

    return tarea;


  }

  async update(id,changes){
    const index = this.tareas.findIndex((item) => item.id === id);
    if(index ===-1){
      throw boom.notFound('Tarea no encontrada');
    }
    const tarea = this.tareas[index];
    this.tareas[index]={
      ...tarea,
      ...changes,
    }
    return this.tareas[index];
  }

  async delete(id){
    const index=this.tareas.findIndex((item) => item.id === id);
    if(index === -1){
      throw boom.notFound('Id de tarea no encontrado');

    }
    this.tareas.splice(index, 1);

    return {id};
  }



  }


  module.exports=tareasService;



