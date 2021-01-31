const { static, json } = require('express');
const fs = require('fs');
const path = require('path');
const { getCart } = require('../controllers/store');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'routes',
    'proveRoutes',
    'prove03',
    'data',
    'cart.json'
);
 
module.exports = class Cart {
    static addItem(sku, itemPrice) {
        fs.readFile(p,(err, fileContent) =>{
            let Cart = {items: [], totalPrice: 0}
            if(!err){
                cart = JSON.parse(fileContent);
            }
          
            const existingItemIndex = cart.items.findIndex(it.sku === sku);
            const existingItem = cart.items[existingItemIndex];
            let updatedItem;
            if (existingItem) {
                updatedItem = { ...existingItem };
                updatedItem.qty = updatedItem.qty + 1;
                cart.items = [...cart.items];
                cart.items[existingItemIndex] = updatedItem;

 } else {
    updatedProduct = 
    { sku: sku, 
        qty: 1 
    }
    cart.items = [...cart.items, updatedItem];
  }
  cart.totalPrice = cart.totalPrice + +itemPrice;
      fs.writeFile(p, JSON.stringify(cart), err => {
        console.log(err);
      });
    });
  }

  static deleteItem(sku, itemPrice) {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return;
      }
      const updatedCart = { ...JSON.parse(fileContent) };
      const item = updatedCart.items.find(it => it.sku === sku);
      if(!item){
          return;
      }
      const itemQty = item.qty;
      updatedCart.items = updatedCart.items.filter(
        it => it.sku !== sku)

      updatedCart.totalPrice = updatedCart.totalPrice - itemPrice * itemQty;

      fs.writeFile(p, JSON.stringify(updatedCart), err => {
        console.log(err);
      });
    });
  }

  static getCart(callback){
      fs.readFile(p,(err, fileContent)=>{
          const cart = JSON.parse(fileContent);
          if(err){
              callback(null);
          }else{
              callback(cart);
          }
      });
  }

}