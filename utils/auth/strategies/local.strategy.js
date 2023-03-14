const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const empleadosService = require('./../../../services/empleados.service');
const service = new empleadosService();

const LocalStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, pass, done) => {
    try {
      const empleado = await service.findByEmail(email);
      if (!empleado) {
        done(boom.unauthorized(), false);
      }
      const isMatch = await bcrypt.compare(pass, empleado.pass);
      if (!isMatch) {
        done(boom.unauthorized(), false);
      }
      delete empleado.dataValues.pass;
      done(null, empleado);
    } catch (error) {
      done(error, false);
    }
  }
);

module.exports = LocalStrategy;
