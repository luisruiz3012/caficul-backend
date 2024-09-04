const jwt = require('jsonwebtoken');
const Order = require('../models/Order');
const jwtGenerator = require('../utils/jwtGenerator');

class OrderController {
  async getAll(req, res) {
    const orders = await Order.find().populate('products').exec();
    
    if (!orders) {
      return res.status(404).json({ error: 'Not Found' });
    }

    return res.status(200).json(orders);
  }

  async getAllByWallet(req, res) {
    const authorization = req.get('Authorization');

    let token = '';

    if (authorization.toString().toLowerCase().startsWith('bearer')) {
      token = authorization.split(' ')[1];
    }

    let decodedToken = {};

    try {
      decodedToken = jwt.verify(token, process.env.PRIVATE_KEY);
    } catch (e) {
      if (e) {
        return res.status(401).json({ error: 'Token missing or invalid' });
      }
    }

    if (!token || !decodedToken.wallet) {
      return res.status(401).json({ error: 'Token missing or invalid' });
    }

    const orders = await Order.find({'buyerWallet': `${decodedToken.wallet}`}).populate('products').exec();
    
    if (!orders) {
      return res.status(404).json({ error: 'Not Found' });
    }

    return res.status(200).json(orders);
  }

  async create(req, res) {
    try {
      const { body } = req;
      const order = new Order(body);
      const saved = await order.save();

      if (saved) {
        return res.status(201).json({ message: 'Order placed successfully'})
      }
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }
}

module.exports = OrderController;