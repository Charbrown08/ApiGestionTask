const boom = require('@hapi/boom');

// async function validarFechas(nuevaTarea) {
//     const fechaCreacion = new Date(nuevaTarea.fecha_creacion);
//     const fechaInicio = new Date(nuevaTarea.fecha_inicio_tarea);
//     const fechaFinal = new Date(nuevaTarea.fecha_finalizacion_tarea);

//     if (fechaCreacion > fechaInicio) {
//         // await nuevaTarea.destroy(); // Eliminar la tarea recién creada
//         throw boom.badRequest(
//             'La fecha de creación no puede ser mayor que la fecha de inicio'
//         );
//     }

//     if (fechaInicio > fechaFinal) {
//         // await nuevaTarea.destroy(); // Eliminar la tarea recién creada
//         throw boom.badRequest(
//             'La fecha de inicio de tarea no puede  ser mayor a la fecha de finalizacion de la tarea'
//         );
//     }
// }

function validarFechas(fechaCreacion, fechaInicio, fechaFinal) {
  if (fechaCreacion > fechaInicio) {
      throw boom.badRequest(
          'La fecha de creación no puede ser mayor que la fecha de inicio'
      );
  }

  if (fechaInicio > fechaFinal) {
      throw boom.badRequest(
          'La fecha de inicio de tarea no puede  ser mayor a la fecha de finalizacion de la tarea'
      );
  }
}




module.exports = validarFechas
