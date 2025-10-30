const dayjs = require('dayjs');

class Product {
  constructor({ sku, name, category, unitPrice, minQuantity }) {
    this.sku = sku;
    this.name = name;
    this.category = category; // 'PERECIVEL' | 'NAO_PERECIVEL'
    this.unitPrice = unitPrice;
    this.minQuantity = minQuantity || 0;
    this.createdAt = dayjs().toISOString();
    this.quantity = 0; // saldo atual
    this.movements = [];
  }
}

module.exports = Product;
