const e = require('express');
const express = require('express');
const Profile = require('../models/profile');
const Zzim = require('../models/zzim');
const User = require('../models/user');
const Main = require('../models/main');
const Popular = require('../models/popular_item');

const { Op } = require("sequelize");
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
    const profiles = await Profile.findAll({ where : { login_id : req.user.login_id}});
    const profile = profiles[0];
    const obj = Object.values(profile)[0];
    const user_gender = Object.values(obj)[3];
    const prefer_style = Object.values(obj)[7];
    const prefer_color = Object.values(obj)[8];

    
    const mains = await Main.findAll({ where : { login_id : req.user.login_id,
                                                  [Op.and]: { 
                                                    [Op.or]: [{style: prefer_style}, {style: "All"}],
                                                    [Op.or]: [{color : prefer_color}, {color: 'All'}]
                                                  }                                  
    }});
    const populars = await Popular.findAll({ where : { [Op.or]: [{gender : user_gender}, {gender: '남여'}] }});
    const nick = req.user.nick;

    res.render('main', {
      user_name : nick,
      mains,
      populars
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

router.post('/mypage', async (req, res, next) => {
  try {
    const profile = await Profile.update({
      user_age: req.body.user_age,
      user_gender: req.body.user_gender,
      user_height: req.body.user_height,
      user_weight: req.body.user_weight,
      job_title: req.body.job_title,

      prefer_color: req.body.prefer_color,
      prefer_style: req.body.prefer_style,
      prefer_brand: req.body.prefer_brand,
      price_range: req.body.price_range,
    },
    {where : {login_id : req.user.login_id}});
    //res.status(201).json(profile);
  } catch (err) {
    console.error(err);
    next(err);
  }
})

module.exports = router;
