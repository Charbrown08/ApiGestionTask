const express = require('express');
const passport = require('passport');
const router = express.Router();
const jwt = require('jsonwebtoken');

const { config } = require('./../config/config');

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;

      const payload = {
        sub: user.id,
        role: user.rol,
      };
      const token = jwt.sign(payload, config.jwtSecret);
      res.json({
        user,
        token,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.post('/recovery', async (req, res, next) => {
  try {
    const { email } = req.body;

  } catch (error) {
    next(error);
  }
});

module.exports = router;
