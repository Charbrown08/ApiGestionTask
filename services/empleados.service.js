const faker = require('faker');
const boom = require('@hapi/boom');
const getConnection=require('../libs/postgres');//sin pool

const pool=require('../libs/postgres.pool');



class empleadosService {

  constructor() {
    this.pool=pool;
    this.pool.on('error',(err)=>console.error(err));
   }


  async create(data) {
    return data;
  }

  async find() {
    const query='SELECT * FROM empleados';
    const rta=await this.pool.query(query);
    return rta.rows;
  }

  async findOne(id) {
    const empleado=this.empleados.find((item) => item.id === id);
    if(!empleado){
      throw boom.notFound(' id empleado no enontrado')
    }
    return empleado

  }

  async update(id, changes) {
    const index = this.empleados.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('Empleado no encontrado zz');
    }
    const empleado = this.empleados[index];
    this.empleados[index] = {
      ...empleado,
      ...changes,
    };

    return this.empleados[index];
  }

  async delete(id) {
    const index = this.empleados.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    this.empleados.splice(index, 1);
    return { id };
  }

}

module.exports=empleadosService;
