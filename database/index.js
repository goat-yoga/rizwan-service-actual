const mongoose = require('mongoose');
const { createProducts, createMiscPages } = require('./seed.js')

let url = 'mongodb://localhost/Nav_Bar'; // connect to local DB: "Nav_Bar"
let db = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = db;