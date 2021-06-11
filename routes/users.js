const express = require('express');
const Profile = require('../models/profile');
const Zzim = require('../models/zzim');
const Main = require('../models/main');
const User = require('../models/user');
const Popular = require('../models/popular_item');

const router = express.Router();

router.route('/')
  .get(async (req, res, next) => {
    try {
      const profiles = await Profile.findAll();
      res.json(profiles);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const profile = await Profile.create({
        login_id : req.user.login_id,
        user_age: req.body.user_age,
        user_gender: req.body.user_gender,
        user_height: req.body.user_height,
        user_weight: req.body.user_weight,
        job_title: req.body.job_title,

        prefer_color: req.body.prefer_color,
        prefer_style: req.body.prefer_style,
        prefer_brand: req.body.prefer_brand,
        price_range: req.body.price_range,
      });
      console.log(profile);
      res.status(201).json(profile);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });
router.post('/modify', async (req, res, next) => {
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
    res.status(201).json(profile);
  } catch (err) {
    console.error(err);
    next(err);
  }
})

router.post('/main', async (req, res, next) => {
  console.log(Zzim);
  try {
    const zzims = await Zzim.create({
      id: req.user.login_id,
      item_id: req.body.item_id,
      img: req.body.img,
      title: req.body.title,
      brand: req.body.brand,
      item_url: req.body.item_url
    },
    );
    console.log(Zzim);
    res.status(201).json(zzims);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.delete('/zzim', async (req, res, next) => {
  console.log(Zzim);
  try {
    const zzims = await Zzim.destroy({
      where: { item_id: req.body.item_id }
    });
    console.log(zzims);
    console.log('성공');
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

module.exports = router;
