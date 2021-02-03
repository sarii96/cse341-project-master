const Item = require('../models/items');

exports.getAddItem = (req, res, next) => {
  res.render('pages/proveAssignments/prove04/admin/edit-item', {
    title: 'Add item',
    path: '/admin/add-item',
    editing: false
  });
};

exports.postAddItem = (req, res, next) => {
  const title = req.body.title;
  const imgURL = req.body.imgURL;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Item({
    title: title,
    price: price,
    description: description,
    imgURL: imgURL,
    userId: req.user
  });
  product.save()
    .then(result => {
      // console.log(result);
      console.log('Created Product');
      res.redirect('/assignments/prove04-admin/items');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getEditItem = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/proveAssignments/prove04/');
  }
  const _sku = req.params.itemId;
  Item.findById(_sku)
    .then(item => {
      if (!item) {
        return res.redirect('/proveAssignments/prove04/');
      }
      res.render('pages/proveAssignments/prove04/admin/edit-item', {
        title: 'Edit Item',
        path: '/admin/edit-item',
        editing: editMode,
        item: item
      });
    });
};

exports.postEditItem = (req, res, next) => {
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImgURL = req.body.imgURL;
  const updatedDescription = req.body.description;
  const itemsku = req.body.sku

  Item.findById(itemId)
    .then(item => {
      item.title = updatedTitle;
      item.price = updatedPrice;
      item.description = updatedDescription;
      item.imgURL = updatedImgURL;
      item
      .save();
    })
    .then(result => {
      console.log('UPDATED PRODUCT!');
      res.redirect('');
    })
    .catch(err => {
      console.log(err)
  });
};

exports.getItems = (req, res, next) => {
  Item.find()
    // .select('title price -_id')
    .populate('userId', 'name')
    .then(items => {
      // console.log(items);
      res.render('pages/proveAssignments/prove04/admin/item-list', { 
        title: 'Admin Items',
        path: '/admin/item',
        items: items,
        hasItems:items.length > 0
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postDeleteItem = (req, res, next) => {
  const _sku = req.body.itemsku;
  Item.findByIdAndRemove(_sku)
    .then(() => {
      console.log('DESTROYED PRODUCT');
      res.redirect('pages/proveAssignments/prove04-admin/item-list');
    })
    .catch(err => console.log(err));


};