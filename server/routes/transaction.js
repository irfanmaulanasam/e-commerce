var express = require('express');
var router = express.Router();
const transactionController = require('../controllers/transactionController')
const {tokencheck} = require('../middleware/tokencheck')
router.get('/list', tokencheck, transactionController.read)
router.post('/add', tokencheck, transactionController.create)
router.put('/update/:id', tokencheck, transactionController.update)

module.exports = router;
