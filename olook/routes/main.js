const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/main', async (req, res, next) => {
    try {
      const users = await User.findAll();
      res.render('/main/main', { users });
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

module.exports = router;