var express = require('express');
var router = express.Router();
var provider = require('../controllers/ProviderController');

router.get('/view', provider.view);
router.get('/add', provider.add);
router.post('/save', provider.save);
router.get('/edit', provider.edit);
router.post('/update', provider.update);
router.post('/delete', provider.delete);

module.exports = router;