const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    desc: String,
    price: Number,
    status: String
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;