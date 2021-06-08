const mongoose = require('mongoose');

const PaperTypeSchema = new mongoose.Schema({
    type_name : String,
    width : Number,
    height : Number,
    unit : String,
    gram : Number
});

module.exports = mongoose.model('PaperType', PaperTypeSchema);