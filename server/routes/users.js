var express = require('express');
var router = express.Router();
const userController = require('../controllers/usercontroller')

router.post('/signup',userController.create)
router.post('/signin',userController.signin)
// router.post('/Gsignin',userController.Gsignin)
router.put('/update',userController.update)
router.delete('/delete',userController.delete)


module.exports = router;