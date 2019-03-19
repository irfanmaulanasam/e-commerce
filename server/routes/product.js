var express = require('express');
var router = express.Router();
const productController = require('../controllers/productcontroller')

router.get('/list', productController.read)
router.get('/search',productController.findOne)
router.post('/add',productController.create)
router.put('/update/:id',productController.update)
router.delete('delete/:id',productController.delete)
module.exports = router;
