const mongoose = require('mongoose');

const PaperSchema = new mongoose.Schema({
    supplier_id : String,
    suppliername : String,
    paper_type : String,
    type_name : String,
    paper_size : String,
    unit : String,
    gram : String,
    brand : String,
    amount_per_pack : Number,
    price_per_ream : Number,
    price_per_kg : Number,
    price_per_sheet : Number,
    updated_at : String
})

module.exports = mongoose.model('Paper', PaperSchema);