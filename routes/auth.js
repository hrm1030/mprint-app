var express = require('express');
var router = express.Router();
var auth = require('../controllers/AuthController');

router.post('/signup', auth.signup);
router.get('/login', auth.login);
router.post('/signin', auth.signin);

module.exports = router;