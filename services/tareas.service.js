const boom = require('@hapi/boom');

const { Estado } = require('../db/models/estado.model');
const { Empleado } = require('../db/models/empleado.model');
const sequelize = require('./../libs/sequelize');
const  validarFechas=require('./validar.fechas');

const verificarCambiosPermitidos= require('./validacion.estados');
const { models } = require('./../libs/sequelize');


class tareasService {
  //_________________________________________________________________

  // async create(data) {
  //   const nuevaTarea = await models.Tarea.create(data);

  //   return nuevaTarea;
  // }

  async create(data) {
    const empleado = await models.Empleado.findByPk(data.id_empleado);
    if (!empleado) {
      throw boom.notFound('El empleado no existe');
    }

    const nuevaTarea = await models.Tarea.create(data);
    const fechaCreacion = new Date(nuevaTarea.fecha_creacion);
    const fechaInicio = new Date(nuevaTarea.fecha_inicio_tarea);
    const fechaFinal = new Date(nuevaTarea.fecha_finalizacion_tarea);


    await validarFechas(fechaCreacion,fechaInicio,fechaFinal);


    return nuevaTarea;
  }

  // tareas por empleado

  //_________________________________________________________________

  async findByEmpleado(empleadoId) {
    const tareas = await models.Tarea.findAll({
      where: {
        '$empleado.id$': empleadoId,
      },
      include: [
        {
          association: 'empleado',
          // include:['estado']
        },
      ],
    });
    return tareas;
  }

  //_________________________________________________________________

  async find() {
    const tareas = await models.Tarea.findAll();
    return tareas;
  }

  //______________________________________________________________

  async findCategoria(query) {
    const options = {
      attributes: ['nombre', 'fecha_creacion'],
      include: {
        model: Estado,
        as: 'estado',
        attributes: ['categoria'],
        where: {},
      },
    };

    const { categoria } = query;

    if (categoria) {
      options.include.where.categoria = categoria;
    }

    const tareas = await models.Tarea.findAll(options);

    return tareas;
  }

  //____________________________________________________________

  async findOne(id) {
    const tarea = await models.Tarea.findByPk(id, {
      include: ['empleado', 'estado'],
    });
    if (!tarea) {
      throw boom.notFound('Tarea no encontrada');
    }

    return tarea;
  }

  //___________________________________________________________
  // async update(id, changes) {
  //   const tarea = await this.findOne(id);



    // if (changes.id_empleado !== undefined) {
    //   // Verificar si existe el empleado
    //   const empleado = await Empleado.findOne({
    //     where: { id: changes.id_empleado },
    //   });
    //   if (!empleado) {
    //     throw boom.notFound(
    //       'El empleado con id ' + changes.id_empleado + ' no existe'
    //     );
    //   }
    // }

  //   const rta = await tarea.update(changes);

  //   return rta;
  // }

  //________________________________________________________________

  async delete(id) {
    const tarea = await this.findOne(id);
    await tarea.destroy();

    return { id };
  }
//___________________________________________________________________
// async update(id, changes) {
//   const tarea = await this.findOne(id);

//   if (changes.id_estado !== undefined) {
//     // Verificar si existe el estado actual y el nuevo estado
//     const estadoActual = await Estado.findOne({
//       where: { id: tarea.id_estado },
//     });
//     const nuevoEstado = await Estado.findOne({
//       where: { id: changes.id_estado },
//     });
//     if (!estadoActual || !nuevoEstado) {
//       throw boom.notFound('Estado no encontrado');
//     }

//     // Verificar si el cambio de estado está permitido
//     const cambiosPermitidos = estadoActual.cambiosPermitidos.split(',').map(Number);
//     if (!cambiosPermitidos.includes(parseInt(nuevoEstado.id))) {
//       const nombresCambiosPermitidos = await Promise.all(cambiosPermitidos.map(async (id) => {
//         const estado = await Estado.findOne({ where: { id } });
//         return estado ? estado.nombre : '';
//       }));
//       throw boom.badRequest(`El estado actual es [${estadoActual.id}_ ${estadoActual.nombre}] y solo se puede cambiar a los siguientes estados: ${cambiosPermitidos.map((id, i) => `${id}: ${nombresCambiosPermitidos[i]}`).join(', ')}`);
//     }
//   }

//   // Actualizar la tarea si se permitió el cambio de estado
//   const rta = await tarea.update(changes);

//   return rta;
// }

// ______________________________________________________________________

async update(id, changes) {
  const tarea = await this.findOne(id);

  if (changes.id_estado !== undefined) {
    // Verificar si existe el estado actual y el nuevo estado
    const estadoActual = await Estado.findOne({
      where: { id: tarea.id_estado },
    });
    const nuevoEstado = await Estado.findOne({
      where: { id: changes.id_estado },
    });

    const cambiosPermitidos = estadoActual.cambiosPermitidos;
    await verificarCambiosPermitidos(estadoActual, nuevoEstado, cambiosPermitidos);

  }

  if (changes.id_empleado !== undefined) {
    // Verificar si existe el empleado
    const empleado = await Empleado.findOne({
      where: { id: changes.id_empleado },
    });
    if (!empleado) {
      throw boom.notFound(
        'El empleado con id ' + changes.id_empleado + ' no existe'
      );
    }
  }



  // Actualizar la tarea si se permitió el cambio de estado
  const rta = await tarea.update(changes);
  if (changes.fecha_inicio_tarea || changes.fecha_finalizacion_tarea) {
    await validarFechas(rta);
  }

  return rta;
}


}

module.exports = tareasService;
