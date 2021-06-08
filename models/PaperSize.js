const mongoose = require('mongoose');

const PaperSizeSchema = new mongoose.Schema({
    size : String
});

module.exports = mongoose.model('PaperSize', PaperSizeSchema);