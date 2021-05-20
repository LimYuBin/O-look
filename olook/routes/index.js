var express = require('express');
const User = require('../models/user');

var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.render('index', { users });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
