var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('msignhome', { layout : false, title: 'Home' });
});

module.exports = router;
