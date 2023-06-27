const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flowerSchema = new Schema({
    name: String,
    dateOfEvent: String,
    location: String,
    notes: String,
    flowerName: [{type: String}],
    flowerAmount: [{type: Number, min: 1, max: 99, required: true}],
    greenName: [{type: String}],
    greenAmount: [{type: Number, min: 1, max: 99}],
}, {timestamps: true});


module.exports = mongoose.model('Flower', flowerSchema)






// orderDate: Date
//flowerTwoName: String,
//flowerTwoAmount: Number,
//flowerThreeName: String,
//flowerThreeAmount: Number,


// Rose #12
// Greenery 
// Main flower Rose #12
// Accent flower 
// Name of Client
// Order Date
// Wedding Date

// Bridal Bouquet
// 40-50 stems
// 12-15 types of flower
// Flower #1
// Flower #2
// Flower #3
// Flower #4
// Greenery max would be 4

// Bridesmaids bouquet
// 30 stems
// 12 - 15
// 
// Greenery max would be 4

// Centerpieces
// 5inch
// 25 / 30 stems
// 12-15 varieties
