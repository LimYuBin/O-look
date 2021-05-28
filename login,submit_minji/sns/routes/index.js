const express = require('express');
const User = require('../models/user');
const Post = require('../models/post');

const router = express.Router();

// router.get('/', async (req, res, next) => {
//   try {
//     const users = await User.findAll();
//     res.render('prefer', { users });
//   } catch (err) {
//     console.error(err);
//     next(err);
//   }
// });

router.get('/welcome', async (req,res,next) => {
  try {
    const users = await User.findAll();
    res.render('welcome', { users });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post('/welcome', async (req,res,next) => {
  try {
      const users = await User.findAll();
      res.render('welcome', { users });
    } catch (err) {
      console.error(err);
      next(err);
    }
  });


router.get('/main', async (req,res,next) => {
  try {
    // const users = await User.findAll();
    // res.render('main', { users });
    const posts = await Post.findAll({
      // include: {
      //   model: User,
      //   attributes: ['id', 'nick'],
      // },
      // order: [['createdAt', 'DESC']],
    });
    res.render(posts);
    // res.render('main_', {
    //   title: 'NodeBird',
    //   twits: posts,
    // });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
