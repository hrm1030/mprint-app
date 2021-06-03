var express = require('express');
var router = express.Router();
var customer = require('../controllers/CustomerController');

/* GET users listing. */
router.get('/view', customer.view);

router.get('/add', customer.add);
router.post('/save', customer.save);
router.get('/edit', customer.edit);
router.post('/update', customer.update);
module.exports = router;
