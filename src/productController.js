const express = require('express');
const router = express.Router();
const productService = require('./services/productService');

router.post('/', (req, res) => {
  try {
    const product = productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', (req, res) => {
  res.json(productService.listProducts());
});

module.exports = router;
