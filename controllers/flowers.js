
const Flower = require('../models/flower')

module.exports = {
    index,
    show,
    new: newFlower,
    create,
    delete: deleteFlower,
    edit,
    update
}

async function update(req, res){
    const flower = await Flower.findById(req.params.id)
    try {
        const flowerId = req.params.id
        const flowerBody = req.body

        await Flower.findByIdAndUpdate(flowerId, flowerBody)
        /// Takes id to find it, req.body is what it is updating
        res.redirect(`/flowers/${flowerId}`)
    } catch(err) {
        console.log(err)
        res.render('flowers/edit', {
			flower,
			message: 'You made an error',
			error: 'ERROR',
			title: 'error',
			errorMsg: err.message
		})
    }
}

async function edit(req, res){
    const flower = await Flower.findById(req.params.id)
    const context = {
        flower,
        errorMsg: "not working"
    }
    res.render('flowers/edit', context)
}

async function deleteFlower(req, res){
    try {
        await Flower.findByIdAndDelete(req.params.id)
        res.redirect('/flowers')
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
        res.redirect('/flowers')
    } catch(err) {
        res.render('flowers/new', {
			title: 'error',
			errorMsg: err
		})
    }
}


function newFlower(req, res){
    res.render('flowers/new', {
        errorMsg: '',
        title: 'New Flower'
    })
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