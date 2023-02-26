const boom= require('@hapi/boom');
const { validationResult } = require('express-validator');

// const validateResult=(req, res, next)=>{
//   try {
//     validationResult(req).throw()
//     return next();

//   } catch (err) {
//     res.status(403)
//     res.send({errors: err.array()})


//   }
// }

// module.exports ={validateResult}


function validatorHelp(schema,property){
  return (req,res,next)=>{
    const data = req[property];
    const{error}=schema.validationResult(data);
    if(error){
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHelp;
