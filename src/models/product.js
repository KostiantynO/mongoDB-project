const {Schema, model} = require('mongoose');

const productSchema = Schema({
  name: String,
  price: Number,
  location: String,
});

// name Product -> in single form, capitalized first letter.
// collection of "products" in single form -> "product"
const Product = model('product', productSchema);
// categories => category
// mice => mouse

module.exports = Product;
