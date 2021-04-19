const express = require('express');
//const auth = require('../middlewares/token');
var router = express.Router();

const catalogController = require('../controllers/catalog-controller');

router.post('/add' ,/*auth,*/ catalogController.add);
router.put('/update',/*auth,*/ catalogController.update);
router.get('/get' ,/*auth,*/ catalogController.get);


module.exports = router;
