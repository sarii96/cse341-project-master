const express = require('express');
const router = express.Router();

const storeController = require('../controllers/store');



router.get('/', storeController.getIndex);

router.get('/items', storeController.getItems);

router.get('/items/:itemsku', storeController.getItem);

router.get('/cart', storeController.getCart);

router.post('/cart', storeController.postCart);

router.post('/cart-delete-item', storeController.postCartDeleteItem);

router.post('/create-order', storeController.postOrder);

router.get('/orders', storeController.getOrders);

module.exports = router;
