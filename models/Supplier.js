const mongoose = require('mongoose');

const SupplierSchema = new mongoose.Schema({
    name : String,
    contactperson : String,
    tel_1 : Number,
    tel_2 : Number,
    fax : Number,
    email : String,
    address : String,
    other : String,
    supplier_type : String,
    is_active : Number,
    created_at : String,
    updated_at : String
})

module.exports = mongoose.model('Supplier', SupplierSchema);