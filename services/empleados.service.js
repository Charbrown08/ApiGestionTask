const faker = require('faker');
const boom = require('@hapi/boom');
const getConnection=require('../libs/postgres');



class empleadosService {

  constructor() { }


  async create(data) {
    return data;
  }

  async find() {
    const client = await getConnection();
    const rta=await client.query('SELECT * FROM public.empleados');
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
