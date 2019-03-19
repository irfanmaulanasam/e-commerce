var express = require('express');
var router = express.Router();
const productController = require('../controllers/productcontroller')

router.get('/list', productController.read)

module.exports = router;
