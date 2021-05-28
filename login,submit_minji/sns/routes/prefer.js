const express = require('express');
// const Prefer = require('../models/prefer');

const router = express.Router();

//내가 추가
router.get('/', async (req, res, next) => {
  try {
    //const users = await User.findAll();
    // res.render('profile/prefer', { users });
    res.render('profile/prefer');
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.route('/prefer')
  .get(async (req, res, next) => {
    try {
      // const prefers = await Prefer.findAll();
      // res.json(prefers);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const prefer = await Prefer.create({
        prefer_color: req.body.color,
        prefer_style: req.body.style,
        prefer_brand: req.body.brand,
        price_range: req.body.price,
      });
      console.log(prefer);
      res.status(201).json(prefer);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

module.exports = router;