var express = require('express');
var router = express.Router();
var supplier = require('../controllers/SupplierController');

router.get('/view', supplier.view);
router.get('/add', supplier.add);
router.post('/save', supplier.save);
router.get('/edit', supplier.edit);
router.post('/update', supplier.update);
router.post('/delete', supplier.delete);

module.exports = router;