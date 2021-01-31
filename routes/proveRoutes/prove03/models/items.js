const fs = require('fs');
const path = require('path');
const { callbackify } = require('util');

const Cart = require('./cart');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'routes',
    'proveRoutes',
    'prove03',
    'data',
    'items.json'
  );

  const getItemsFromFile = callback => {
    fs.readFile(p, (err, data) => {
      if (err) {
        callback([]);
      } else {
        callback(JSON.parse(data));
      }
    });
  }

  module.exports = class Item {
    constructor(sku, title, imageUrl, price, description) {
      this.sku = sku;
      this.title = title;
      this.imageUrl = imageUrl;
      this.price = price;
      this.description = description;
     
    }

    save() {
        getItemsFromFile(items => {
          if (this.sku) {
            const existingItemIndex = items.findIndex(  it => it.sku === this.sku);
            const updatedItems = [...items];
            updatedItems[existingItemIndex] = this;
            fs.writeFile(p, JSON.stringify(updatedItems), err => {
              console.log(err);
            });
        } else {
            this.sku = Math.random().toString();
            items.push(this);
            fs.writeFile(p, JSON.stringify(items), err => {
              console.log(err);
            });
          }
        });
      }

      static deleteBysku(sku) {
        getItemsFromFile(items => {
          const item = items.find(it => it. sku === sku);
          const updatedItems = items.filter(it => it.sku !== sku);
          fs.writeFile(p, JSON.stringify(updatedItems), err => {
            if (!err) {
              Cart.deleteItem(sku, item.price);
            }
          })
        });
      }
      static fetchAll(callback) {
        getItemsFromFile(callback);
      }

      static findBySku(sku, callback) {
        getItemsFromFile(items => {
          const item = items.find(i => i.sku === sku);
          callback(item);
        });
      }
    }
    