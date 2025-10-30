const dayjs = require('dayjs');
const Movement = require('../models/movement');
const productService = require('./productService');

class MovementService {
  addMovement(sku, data) {
    const product = productService.getProduct(sku);
    if (!product) throw new Error('Produto não encontrado');
    if (typeof data.quantity !== 'number' || data.quantity <= 0) throw new Error('Quantidade deve ser positiva');
    if (!['ENTRADA', 'SAIDA'].includes(data.type)) throw new Error('Tipo inválido');

    // Validação para perecíveis
    if (product.category === 'PERECIVEL') {
      if (!data.lot || !data.expiryDate) throw new Error('Perecível requer lote e data de validade');
      if (dayjs(data.expiryDate).isBefore(dayjs())) throw new Error('Data de validade expirada');
      if (dayjs(data.date).isAfter(dayjs(data.expiryDate))) throw new Error('Movimentação após validade não permitida');
    }

    // Saída: verifica saldo
    if (data.type === 'SAIDA') {
      if (product.quantity < data.quantity) throw new Error('Estoque insuficiente');
      product.quantity -= data.quantity;
    } else {
      product.quantity += data.quantity;
    }

    const movement = new Movement(data);
    product.movements.push(movement);
    return movement;
  }
}

module.exports = new MovementService();
