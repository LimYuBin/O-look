const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.route('/')
  .get(async (req, res, next) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const user = await User.create({
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
      console.log(user);
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

module.exports = router;
