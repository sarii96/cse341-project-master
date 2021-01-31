const express = require('express');
const router = express.Router();

const storeController = require('../controllers/store');


router.get('/', storeController.getIndex);

router.get('/items', storeController.getItems);

router.get('/items/:itemSku', storeController.getItem);

router.get('/cart', storeController.getCart);

router.post('/cart', storeController.postCart);

router.post('/cart-delete-item', storeController.postCartDeleteItem);

router.get('/orders', storeController.getOrders);

router.get('/checkout', storeController.getCheckout);

module.exports = router;




