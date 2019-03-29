var express = require('express');
var router = express.Router();
const cartController = require('../controllers/cartcontroller')
const {tokencheck} = require('../middleware/tokencheck')
router.get('/list', tokencheck, cartController.read)
router.get('/search',cartController.findOne)
router.post('/add', tokencheck, cartController.create)
router.put('/update/:id', tokencheck, cartController.update)
router.delete('delete/:id', tokencheck, cartController.delete)

module.exports = router;
