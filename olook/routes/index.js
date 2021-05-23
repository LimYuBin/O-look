const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.render('profile1', { users });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get('/prefer', async (req,res,next) => {
  try {
    const users = await User.findAll();
    res.render('prefer', { users });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
