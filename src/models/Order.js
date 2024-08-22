const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  }, 
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'Pending',
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  total: {
    type: Number,
    required: true
  },
  token: {
    type: String,
    required: true
  },
  buyerWallet: {
    type: String,
    required: true
  }
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;