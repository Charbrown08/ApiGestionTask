const express = require('express');
const passport = require('passport');
const tareasService = require('../services/tareas.service');

const router= express.Router();
const service = new tareasService();

router.get(
  '/mis-tareas',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;

      const tareas = await service.findByEmpleado(user.sub);
      res.json(tareas);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
