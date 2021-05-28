const e = require('express');
const express = require('express');
const Profile = require('../models/profile');
const Zzim = require('../models/zzim');

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

router.get('/main', async (req,res,next) => {
  try {
    const profiles = await Profile.findAll();
    const nick = req.user.nick;
    // res.render('main', { profiles });
    res.render('main', {
      user_name : nick,
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
    const zzims = await Zzim.findAll();
    res.render('zzim', { zzims });
  } catch (err) {
    console.error(err);
    next(err);
  }
});


router.get('/mypage', async (req,res,next) => {
  try {
    const profiles = await Profile.findAll();
    res.render('mypage', { profiles });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
