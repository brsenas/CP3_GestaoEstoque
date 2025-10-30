const dayjs = require('dayjs');

class Movement {
  constructor({ type, quantity, date, lot, expiryDate }) {
    this.type = type; // 'ENTRADA' | 'SAIDA'
    this.quantity = quantity;
    this.date = date || dayjs().toISOString();
    this.lot = lot || null;
    this.expiryDate = expiryDate || null;
  }
}

module.exports = Movement;
