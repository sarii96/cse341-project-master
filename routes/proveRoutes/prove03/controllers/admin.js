 const Item = require('../models/items');

exports.getAddItem = ( req, res, next) => {
    res.render('pages/proveAssignments/prove03/admin/edit-item',{
        title: 'Add Item',
        path: 'admin/add-item',
        editing: false
    });
};

exports.postAddItem = (req, res, next) =>{
const title = req.body.title;
const imgURL = req.body.imgURL;
const price = req.body.price;
const description = req.body.description;

const item = new Item(null, title, imgURL, price, description);
console.log(req.body.title);
item.save();
res.redirect('/proveAssignments/prove03/admin/items');
};

exports.getEditItem = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/')
    }

    const _sku = req.params.itemsku;
    Item.findBySku(_sku, item => {
        if (!item){
            return res.redirect('/')
        }
        res.render('pages/proveAssignments/prove03/admin/edit-item',{
            title:'Add Item',
            path: '/admin/add-item',
            editing: editMode,
            item: item
        });
    });
};

exports.postEditItem = (req, res, next) => {
    const sku = req.body.sku;
    const updatedTitle = req.body.title;
    const updatedImgURL = req.body.imgURL;
    const updatedPrice = req.body.price;
    const updatedDescription = req.body.description;

    const updatedItem = new Item(
        sku,
        updatedTitle,
        updatedImgURL,
        updatedPrice,
        updatedDescription);
        updatedItem.save();
        res.redirect('/proveAssignments/prove03/admin/items');
};

exports.getItems = (req, res, next) => {
    Item.fetchAll((_items) => {
        res.render('pages/proveAssignments/admin/item-list',{
            title: "Admin Item Control",
            path: "/admin/items",
            items: _item,
            hasItems: _item.length > 0
        });
    });

};

exports.postDeleteItem = (req, res, next) => {
    const _sku = req.body.deletesku;
    Item.deleteBySku(_sku);
    res.redirect('/proveAssignments/prove03/admin/items')
}