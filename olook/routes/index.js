const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.render('prefer', { users });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get('/welcome', async (req,res,next) => {
  try {
    const users = await User.findAll();
    res.render('welcome', { users });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post('/welcome', async (req,res,next) => {
  try {
      const users = await User.findAll();
      res.render('welcome', { users });
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

router.get('/main', async (req,res,next) => {
  try {
    const users = await User.findAll();
    res.render('main', { users });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get('/zzim', async (req,res,next) => {
  try {
    const users = await User.findAll();
    res.render('zzim', { users });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get('/mypage', async (req,res,next) => {
  try {
    const users = await User.findAll();
    res.render('mypage', { users });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
