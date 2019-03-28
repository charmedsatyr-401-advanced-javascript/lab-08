'use strict';

const Product = require('./products.schema.js');

class Products {
  get(id) {
    let record;
    if (id) {
      record = Product.findById(id);
    } else {
      record = Product.find();
    }
    return record;
  }

  post(entry) {
    entry.name = entry.name.toUpperCase();
    const p = new Product(entry);
    return p.save();
  }

  put(id, entry) {
    entry.name = entry.name.toUpperCase();
    const result = Product.findByIdAndUpdate(id, entry, { new: true });

    return result;
  }

  delete(id) {
    const result = Product.findOneAndRemove({ id });
    return result;
  }
}

module.exports = Products;
