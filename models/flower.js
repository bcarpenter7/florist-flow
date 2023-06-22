const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flowerSchema = new Schema({
    name: String
}, {timestamps: true});

module.exports = mongoose.model('Flower', flowerSchema)