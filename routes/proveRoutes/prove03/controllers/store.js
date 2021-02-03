const Item = require('../models/items');
const Cart = require('../models/cart');

 exports.getItems = (req, res, next) => {
Item.fetchAll((_items) => {
    res.render('pages/proveAssignments/prove03/store/item-list', {
    title: "Store Items",
    path: "/Store/items",
    items: _items,
    hasItems: _items.length > 0
})

 });

}

exports.getItem = (req, res, next) => {
    const _itemSku = req.params.itemSku;
    Item.findBySku (_itemSku, _items => {
        res.render('pages/proveAssignments/prove03/store/item-detail', {
        title: "Store Details",
        path: "/Store/items",
        item: _items,
        })

    });

}

exports.getIndex =  (req, res, next) => {
    Item.fetchAll((_items) => {
        res.render('pages/proveAssignments/prove03/store/index', {
        title: "Store ",
        path: "/Store",
        items: _items,
        hasItems: _items.length > 0
})

 });

}

exports.getCart =  (req, res, next) => {
    Cart.getCart(cart => {
        Item.fetchAll(items => {
        const cartItems = [];
        console.log(cart.totalPrice);
        for (item of items){
            const cartItemData = cart.items.find(it => it.sku === item.sku);
            if (cartItemData) {
                cartItems.push({ itemData: item, qty: cartItemData.qty});
            }
        }
res.render('page/proveAssignments/prove03/store/cart', {
    path: '/store/cart',
    title: 'Your Cart',
    items: cartItems,
    totalPrice: cart.totalPrice
});

        })
    });
}

exports.postCart = (req, res, next) => {
    const _sku = req.body.sku;
    Item.findBySku(_sku, (item) => {
        Cart.addItem(_sku, item.price);
    });
    res.redirect('pages/proveAssignments/prove03/store/cart');
}

exports.postCartDeleteItem = (req, res, next) => {
    const _sku = req.body.delsku;
    Item.findBySku(_sku, item => {
        Cart.deleteItem(_sku, item.price);
  res.redirect('/proveAssignments/prove03/store/cart');
});
}

exports.getOrders = (req, res, next) => {
    res.render('pages/proveAssignments/prove03/store/orders', {
        path: '/store/orders',
        title:'Your Orders',
        Items: []

    });
}

exports.getCheckout = (req, res, next) => {
    res.render('pages/proveAssignments/prove03/store/checkout', {
        path: '/store/checkout',
        title:'Checkout',
        

    });
}