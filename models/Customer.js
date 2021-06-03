const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name : String,
    contactperson : String,
    tel_1 : Number,
    tel_2 : Number,
    fax : Number,
    email : String,
    address : String,
    other : String,
    loyalty : String,
    is_active : Number
})

module.exports = mongoose.model('Customer', CustomerSchema);