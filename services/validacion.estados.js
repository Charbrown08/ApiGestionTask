const Estado = require('./../db/models/estado.model');
const { models } = require('./../libs/sequelize');
const boom=require('@hapi/boom')

async function verificarCambiosPermitidos(estadoActual, nuevoEstado, cambiosPermitidos) {
  if (!estadoActual || !nuevoEstado) {
    throw boom.notFound('Estado no encontrado');
  }

  // Verificar si el cambio de estado está permitido
  const cambiosPermitidosIds = cambiosPermitidos.split(',').map(Number);
  if (!cambiosPermitidosIds.includes(parseInt(nuevoEstado.id))) {
    const nombresCambiosPermitidos = await Promise.all(cambiosPermitidosIds.map(async (id) => {
      const estado = await models.Estado.findOne({ where: { id } });
      return estado ? estado.nombre : '';
    }));
    throw boom.badRequest('El estado actual es [' + estadoActual.id + '-' + estadoActual.nombre + '] y solo se puede cambiar a los siguientes estados: ' + cambiosPermitidosIds.map(function(id, i) {
      return '[' + id + '-' + nombresCambiosPermitidos[i] + ']';
    }).join(' o '));
  }
}

module.exports =verificarCambiosPermitidos
