
const Price = require('../models/price')

module.exports = {
    index,
    show,
    new: newPrice,
    create,
    delete: deletePrice,
    edit,
    update
}

async function update(req, res){
    const price = await Price.findById(req.params.id)
    try {
        const priceId = req.params.id
        const priceBody = req.body

        await Price.findByIdAndUpdate(priceId, priceBody)
        /// Takes id to find it, req.body is what it is updating
        res.redirect(`/prices/${priceId}`)
    } catch(err) {
        console.log(err)
        res.render('prices/edit', {
			price,
			message: 'You made an error',
			error: 'ERROR',
			title: 'error',
			errorMsg: err.message
		})
    }
}

async function edit(req, res){
    const price = await Price.findById(req.params.id)
    const context = {
        price,
        errorMsg: "not working"
    }
    res.render('prices/edit', context)
}

async function deletePrice(req, res){
    try {
        await Price.findByIdAndDelete(req.params.id)
        res.redirect('/prices')
    } catch(err) {
        console.log(err)
        res.render('error', {
			title: 'error',
			errorMsg: err.message
		})
    }
}


async function create(req, res){
    try {
        await Flower.create(req.body)
        res.redirect('/prices')
    } catch(err) {
        res.render('prices/new', {
			title: 'error',
			errorMsg: err
		})
    }
}


function newPrice(req, res){
    res.render('prices/new', {
        errorMsg: '',
        title: 'New Price'
    })
}


async function index(req, res){
    const pricesAll = await Price.find({})
    const context = {
        prices: pricesAll,
        title: 'Prices'
    }
    res.render('prices/index', context)
}


async function show(req, res){
    try {
        //experiment
        const priceFind = await Price.findById(req.params.id)
        const context ={
        price: priceFind,
        title: priceFind.name,
        price
    }
    res.render('prices/show', context)
} catch(err){
    res.render('error', {
        title: 'error',
        errorMsg: err.message
    });
}
}