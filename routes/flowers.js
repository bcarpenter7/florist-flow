var express = require('express');
var router = express.Router();

const flowerCtrl = require('../controllers/flowers')

router.get('/', flowerCtrl.index )

module.exports = router;
