
const Flower = require('../models/flower')

module.exports = {
    index,
    show,
}

async function index(req, res){
    const flowersAll = await Flower.find({})
    const context = {
        flowers: flowersAll,
        title: 'Flowers'
    }
    console.log(flowersAll)
    console.log(flowersAll[0].name)
    res.render('flowers/index', context)
}

async function show(req, res){
    try {
        const flowerFind = await Flower.findById(req.params.id)
        const context ={
        flower: flowerFind,
        title: flowerFind.name
    }
    res.render('flowers/show', context)
} catch(err){
    res.render('error', {
        title: 'error',
        errorMsg: err.message
    });
}
}