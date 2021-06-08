const mongoose = require('mongoose');

const GramSchema = new mongoose.Schema({
    gram : Number
});

module.exports = mongoose.model('Gram', GramSchema);