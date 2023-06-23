var express = require('express');
var router = express.Router();

const priceCtrl = require('../controllers/prices')


// PUT takes data from the edit page and actually updates it
router.put('/:id', priceCtrl.update)

// Delete functionality on Index page
router.delete('/:id', priceCtrl.delete)

// Create function that runs with the info put in the form on 
// the "new" page
router.post('/', priceCtrl.create)

// NEW, Renders the NEW page. Does not actually make a
// new entry
router.get('/new', priceCtrl.new)

// Index or the GETALL function
router.get('/', priceCtrl.index )

// Edit functionality, renders the edit page
router.get('/:id/edit', priceCtrl.edit)

// Index for SHOW or the GETONE function
router.get('/:id', priceCtrl.show)

module.exports = router;
