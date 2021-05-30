const express = require('express');
const Zzim = require('../models/zzim');

const router = express.Router();

router.route('/')
  .get(async (req, res, next) => {
    try {
      const zzims = await Zzim.findAll();
      res.json(zzims);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const zzim = await Zzim.create({
        id: req.body.id,
        img: req.body.img,
        brand: req.body.brand,
        title: req.body.title,
        item_url: req.body.item_url,
        item_id: req.body.item_id,
      });
      console.log(zzim);
      res.status(201).json(zzim);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });
router.delete('/', async (req, res, next) => {
  try {
    Zzim.findAll({});
    Zzim.destroy({
      where: {
        title:"엔젤 와펜 반팔 티셔츠 블랙"
        //title: req.body.title
      }
    })
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.delete('/', async (req, res, next) => {
    try {
      Zzim.findAll({});
      Zzim.destroy({
        where: {
          item_id: req.body.item_id
        }
      })
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

module.exports = router;