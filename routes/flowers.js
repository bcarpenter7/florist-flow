var express = require('express');
var router = express.Router();

const flowerCtrl = require('../controllers/flowers')





// Delete functionality on Index page
router.delete('/:id', flowerCtrl.delete)

// Create function that runs with the info put in the form on 
// the "new" page
router.post('/', flowerCtrl.create)

// NEW, Renders the NEW page. Does not actually make a
// new entry
router.get('/new', flowerCtrl.new)

// Index or the GETALL function
router.get('/', flowerCtrl.index )

// Edit functionality, renders the edit page
router.get('/:id/edit', flowerCtrl.edit)

// Index for SHOW or the GETONE function
router.get('/:id', flowerCtrl.show)

module.exports = router;
