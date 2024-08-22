const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  category: String,
  price: {
    type: Number,
    required: true
  },
  token: {
    type: String,
    default: 'CFL-16IP'
  },
  wallet: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;