const Product = require('../models/product');
const products = [];

class ProductService {
  createProduct(data) {
    if (!data.sku || !data.name || !data.category || typeof data.unitPrice !== 'number') {
      throw new Error('Campos obrigatórios ausentes');
    }
    if (!['PERECIVEL', 'NAO_PERECIVEL'].includes(data.category)) {
      throw new Error('Categoria inválida');
    }
    if (products.find(p => p.sku === data.sku)) {
      throw new Error('SKU já cadastrado');
    }
    const product = new Product(data);
    products.push(product);
    return product;
  }

  getProduct(sku) {
    return products.find(p => p.sku === sku);
  }

  listProducts() {
    return products;
  }

  productsBelowMinimum() {
    return products.filter(p => p.quantity < p.minQuantity);
  }
}

module.exports = new ProductService();
