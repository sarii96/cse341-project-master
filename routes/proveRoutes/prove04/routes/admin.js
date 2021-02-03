const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');



// /admin/add-product => GET
router.get('/add-item', adminController.getAddItem);

// /admin/products => GET
router.get('/items', adminController.getItems);

// /admin/add-product => POST
router.post('/add-item', adminController.postAddItem);

router.get('/edit-item/:itemsku', adminController.getEditItem);

router.post('/edit-item', adminController.postEditItem);

router.post('/delete-item', adminController.postDeleteItem);

module.exports = router;
