var express = require('express');
var router = express.Router();
var paper = require('../controllers/PaperController');

router.get('/view', paper.view);
router.get('/add', paper.add);
router.get('/add_paper_type', paper.add_paper_type);
router.post('/paper_type_save', paper.paper_type_save);
router.post('/paper_type_delete', paper.paper_type_delete);
router.post('/paper_size_save', paper.paper_size_save);
router.post('/gram_save', paper.gram_save);
router.post('/select_size_gram', paper.select_size_gram);
router.post('/paper_save', paper.paper_save);
router.post('/delete', paper.delete);
router.get('/edit', paper.edit);
router.post('/update', paper.update);
module.exports = router;