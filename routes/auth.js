var express = require('express');
var router = express.Router();
var auth = require('../controllers/AuthController');

router.post('/signup', auth.signup);
router.get('/login', auth.login);
router.post('/signin', auth.signin);
router.post('/reset', auth.reset);
router.get('/forgotpassword', auth.forgotpassword);
module.exports = router;