var express = require('express');
var router = express.Router();

const flowerCtrl = require('../controllers/flowers')



// NEW
// 
// Index or the GETALL function
router.get('/', flowerCtrl.index )

// Index for SHOW or the GETONE function
router.get('/:id', flowerCtrl.show)

module.exports = router;
