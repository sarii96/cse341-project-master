const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imgURL: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
   userId:{
     type: Schema.Types.ObjectId,
     ref: 'User',
     require: true
   }
});

module.exports = mongoose.model('Items', itemSchema);