const Product = require('../models/Product');
const path = require('path');

class ProductController {
  async getProducts(req, res) {
    const products = await Product.find();
    res.json(products);
  }

  async getProduct(req, res) {
    const id = req.params.id;
    

  }

  async createProduct(req, res) {
    const files = req.files;

    const { name, category, price, token, wallet } = req.body;

    if (!files) {
      return res.status(400).json({ error: 'No image provided' });
    }
    
    const image = files.productImage;
    const mainPath = path.dirname(require.main.filename)
    const uploadPath = `${process.env.SERVER_URI}/public/images/` + files.productImage.name;
    

    image.mv(uploadPath, function (err) {
      if (err) {
        return res.status(500).json({ error: err });
      }
    });

    const product = new Product({
      name,
      category,
      price,
      token,
      wallet,
      image: `${process.env.SERVER_URI}/images/` + files.productImage.name,
    });

    try {
      const data = await product.save();
      return res.json(data);
    } catch (error) {
      console.error(error);
    }

  }

}

module.exports = ProductController;
