const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/Products');

const controller = new ProductController();

router.get('/', controller.getProducts);
router.post('/', controller.createProduct);

module.exports = router