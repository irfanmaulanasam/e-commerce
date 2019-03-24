var express = require('express');
var router = express.Router();
const transactionController = require('../controllers/transactionController')

router.get('/list', transactionController.read)
router.post('/add',transactionController.create)
router.put('/update/:id',transactionController.update)

module.exports = router;
