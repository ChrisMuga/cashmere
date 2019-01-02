var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController')

//home
router.get('/', userController.index);

//register
router.get('/register', function(req, res, next){
  res.render('users/register', {title: 'Register'});
});

//user-register
router.post('/register', userController.register);
//login
router.get('/login', userController.login);

module.exports = router;
