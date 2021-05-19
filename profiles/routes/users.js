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
        gender: req.body.gender,
        job: req.body.job,
        age: req.body.age,
        height: req.body.height,
        weight: req.body.weight,
      });
      console.log(user);
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

module.exports = router;
