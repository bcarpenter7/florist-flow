const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const priceSchema = new Schema({
    plantName: String,
    price: Number
})


module.exports = mongoose.model('Price', priceSchema)