
const Flower = require('../models/flower')

module.exports = {
    index
}

async function index(req, res){
    const flowersAll = await Flower.find({})
    const context = {
        flowers: flowers,
        title: 'Flowers'
    }
    res.render('flowers/index', context)
}