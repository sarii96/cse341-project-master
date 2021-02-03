const express = require('express');
 const router = express.Router();

 const adminController = require('../controllers/admin');


router.get('/add-item', adminController.getAddItem);


router.get('/items', adminController.getItems);


router.post('/add-item', adminController.postAddItems);

router.get('/edit-item/:itemSku', adminController.getEditItem);

router.post('/edit-item', adminController.postEditItem);

router.post('/delete-item', adminController.postDeleteItem);

module.exports = router;