const express = require('express');
const router = express.Router();
const movementService = require('./services/movementService');

router.post('/', (req, res) => {
  try {
    const { sku, ...data } = req.body;
    const movement = movementService.addMovement(sku, data);
    res.status(201).json(movement);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
