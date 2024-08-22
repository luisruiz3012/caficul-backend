const Order = require('../models/Order');

class OrderController {
  async getAll(req, res) {
    const orders = await Order.find().populate('products').exec();
    
    if (!orders) {
      return res.status(404).json({ error: 'Not Found' });
    }

    return res.status(200).json(orders);
  }

  async getAllByWallet(req, res) {
    const {wallet} = req.query;
    const orders = await Order.find({'buyerWallet': `${wallet}`}).populate('products').exec();
    
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