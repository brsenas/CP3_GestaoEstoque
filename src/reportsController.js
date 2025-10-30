const express = require('express');
const router = express.Router();
const reportsService = require('./services/reportsService');

router.get('/total-value', (req, res) => {
  res.json({ total: reportsService.totalStockValue() });
});

router.get('/expiring-soon', (req, res) => {
  res.json(reportsService.expiringSoon());
});

router.get('/below-minimum', (req, res) => {
  res.json(reportsService.belowMinimum());
});

module.exports = router;
