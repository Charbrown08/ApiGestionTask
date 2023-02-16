const faker = require('faker');
const boom = require('@hapi/boom');

class empleadosService {
  constructor() {
    this.empleados = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.empleados.push({
        id: faker.datatype.uuid(),
        nombre: faker.commerce.productName(),
        fecha_ingreso: parseInt(faker.commerce.price(), 10),
        salario: parseInt(faker.commerce.price(), 10),
      });
    }
  }

  async create(data) {
    const nuevoEmpleado = {
      id:faker.datatype.uuid(),
      ...data,
    };

    this.empleados.push(nuevoEmpleado);
    return nuevoEmpleado;
  }

  async findAll() {
    return this.empleados;
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
