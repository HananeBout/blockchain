const express = require('express');
//const auth = require('../middlewares/token');
var router = express.Router();

const accountController = require('../controllers/account-controller');

router.delete('/delete' ,/*auth,*/ accountController.delete);
router.put('/update',/*auth,*/ accountController.update);
router.get('/get' ,/*auth,*/ accountController.get);
router.patch('/desactive', accountController.desactive);
router.post('/add', accountController.add);


module.exports = router;