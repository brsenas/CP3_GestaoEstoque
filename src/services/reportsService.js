const dayjs = require('dayjs');
const productService = require('./productService');

class ReportsService {
  totalStockValue() {
    return productService.listProducts().reduce((sum, p) => sum + p.quantity * p.unitPrice, 0);
  }

  expiringSoon(days = 7) {
    const now = dayjs();
    return productService.listProducts().filter(p =>
      p.category === 'PERECIVEL' &&
      p.movements.some(m => m.expiryDate && dayjs(m.expiryDate).isAfter(now) && dayjs(m.expiryDate).diff(now, 'day') <= days)
    );
  }

  belowMinimum() {
    return productService.productsBelowMinimum();
  }
}

module.exports = new ReportsService();
