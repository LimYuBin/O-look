const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
// const { Post, User, Hashtag } = require('../models');
const { User } = require('../models');
const router = express.Router();
const Profile = require('../models/profile');
const Main = require('../models/main');

router.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

router.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile1', { title: '내 정보 수정' });
});

router.get('/join', isNotLoggedIn, (req, res) => {
  res.render('join', { title: '회원가입 - NodeBird' });
});

router.get('/', async (req, res, next) => {
  try {
    res.render('main_', {
      title: 'login',
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

//추가
router.get('/welcome', async (req,res,next) => {
  try {
    const profiles = await Profile.findAll();
    res.render('welcome', { profiles });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post('/welcome', async (req,res,next) => {
  try {
      const profiles = await Profile.findAll();
      res.render('welcome', { profiles });
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

module.exports = router;
