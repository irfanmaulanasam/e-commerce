var express = require('express');
var router = express.Router();
const productController = require('../controllers/productcontroller')
const { tokencheck } = require('../middleware/tokencheck');

router.get('/list', productController.read)
router.get('/search',productController.findOne)
router.post('/add',tokencheck, productController.create)
router.put('/update/:id',tokencheck, productController.update)
router.delete('delete/:id',tokencheck, productController.delete)
module.exports = router;
