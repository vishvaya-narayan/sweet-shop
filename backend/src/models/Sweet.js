// src/models/Sweet.js
const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Sweet",
  new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    quantity: Number
  })
);
