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
        user_gender: req.body.user_gender,
        job_title: req.body.job_title,
        user_age: req.body.user_age,
        user_height: req.body.user_height,
        user_weight: req.body.user_weight,
      });
      console.log(user);
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

module.exports = router;
