const express = require('express');

const router = express.Router();

const authController = require('../controllers/auth.js')

// router.get('/', (req, res) => {
//   res.render('index');
// });

router.get('/index', (req, res) => {
    res.render('index',
    {
      user: req.user
    });
})

router.get('/register', (req, res) => {
    res.render('register');
})

router.get('/login', (req, res) => {
    res.render('login');
  });

router.get('/status', (req, res) => {
  res.render('status');
})

router.get('/profile', authController.isLoggedIn, (req, res) => {
  if(req.user){
    res.render('profile', {
      user: req.user
    });
  } else {
    res.redirect('/login');
  }
  
})

router.get('/basketball', (req, res) => {
  res.render('basketball');
})

router.get('/basketball-order', authController.isLoggedIn, (req, res) => {
  if(req.user){
    res.render('basketball-order', {
      user: req.user
    });
  } else {
    res.redirect('/profile');
  }
});

module.exports = router;