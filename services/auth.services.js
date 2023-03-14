const boom = require('@hapi/boom');
const empleadoService=require('./empleados.service');
const service= new empleadoService();
class AuthService{

  async getEmpleado(email,pass){
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

  }

}

module.exports= AuthService;
