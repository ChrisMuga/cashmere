var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController')

//home
router.get('/', function(req, res, next) {
  res.render('users/index', { title: 'Cashmere' });
});

//register
router.get('/register', function(req, res, next){
  res.render('users/register', {title: 'Register'});
});

//user-register
router.post('/register', userController.register);

module.exports = router;