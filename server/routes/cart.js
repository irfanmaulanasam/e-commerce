var express = require('express');
var router = express.Router();
const cartController = require('../controllers/cartcontroller')

router.get('/list', cartController.read)
router.get('/search',cartController.findOne)
router.post('/add',cartController.create)
router.put('/update/:id',cartController.update)
router.delete('delete/:id',cartController.delete)

module.exports = router;
