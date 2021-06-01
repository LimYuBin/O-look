const e = require('express');
const express = require('express');
const Profile = require('../models/profile');
const Zzim = require('../models/zzim');
const User = require('../models/user');
const Main = require('../models/main');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const profiles = await Profile.findAll();
    res.render('prefer', { profiles });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get('/welcome', async (req,res,next) => {
  try {
    const profiles = await Profile.findAll();
    const nick = req.user.nick;
    res.render('welcome', { 
      profiles,
      user_name : nick,
    });
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

router.get('/main', async (req,res,next) => {
  try {
    const profiles = await Profile.findAll();
    const mains = await Main.findAll();
    const nick = req.user.nick;
    // res.render('main', { profiles });
    res.render('main', {
      user_name : nick,
      mains
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get('/dash', async (req,res,next) => {
  try {
    const profiles = await Profile.findAll();
    res.render('dash', { profiles });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get('/zzim', async (req,res,next) => {
  try {
    const zzims = await Zzim.findAll({ where : { id : req.user.login_id}});
    const profiles = await Profile.findAll();
    const nick = req.user.nick;
    res.render('zzim', { user_name : nick, zzims },
    );
  } catch (err) {
    console.error(err);
    next(err);
  }
});


router.get('/mypage', async (req,res,next) => {
  try {
    const profiles = await Profile.findOne({ where : { login_id : req.user.login_id}})
    const users = await User.findOne({ where : { id : req.user.login_id}})
    const nick = req.user.nick;
    console.log(profiles)
    // res.render('mypage', { profiles });
    res.render('mypage', {
      user_name : nick,
      contents : users,
      profiles : profiles,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
