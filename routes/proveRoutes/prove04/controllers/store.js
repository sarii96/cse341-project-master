const Item = require('../models/items');
const Order = require('../models/order');

exports.getItems = (req, res, next) => {
  Item.find()
    .then(items => {
      console.log(items);
      res.render('assignments/prove04/store/item-list', {
       title: 'All Items',
        path: '/items',
        items: items
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getItem = (req, res, next) => {
  const _sku = req.params.itemsku;
  Item.findById(_sku)
    .then(item => {
      console.log(item)
      res.render('pages/proveAssignments/prove04/store/item-detail', {
        item: item,
        title: item.title,
        path: '/items'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Item.find()
    .then(items => {
      res.render('pages/proveAssignments/prove04/store/index', {
        items: items,
        title: 'Store',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .populate('cart.items.itemId')
    .execPopulate()
    .then(user => {
      const items = user.cart.items;
      res.render('page/proveAssignments/prove04/store/cart', {
        path: '/cart',
        title: 'Your Cart',
        items: items
      });
    })
    .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
  const _sku = req.body.itemId;
  Item.findById(_sku)
    .then(item => {
      return req.user.addToCart(item);
    })
    .then(result => {
      console.log(result);
      res.redirect('/cart');
    });
};

exports.postCartDeleteItem = (req, res, next) => {
  const _sku = req.body.itemId;
  req.user
    .removeFromCart(_sku)
    .then(result => {
      res.redirect('/proveAssignments/prove04/store/cart');
    })
    .catch(err => console.log(err));
};

exports.postOrder = (req, res, next) => {
  req.user
    .populate('cart.items.itId')
    .execPopulate()
    .then(user => {
      const items = user.cart.items.map(i => {
        return { quantity: i.quantity, item: { ...i.itemId._doc } };
      });
      const order = new Order({
        user: {
          name: req.user.name,
          userId: req.user
        },
        items: items
      });
      return order.save();
    })
    .then(result => {
      return req.user.clearCart();
    })
    .then(() => {
      res.redirect('/orders');
    })
    .catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
  Order.find({ 'user.userId': req.user._id })
    .then(orders => {
      res.render('pages/proveAssignments/prove04/store/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
        orders: orders
      });
    })
    .catch(err => console.log(err));
};
