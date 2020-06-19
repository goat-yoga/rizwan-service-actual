const Mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

// connects to my Nav_Bar db in mongo's server
let url = 'mongodb://localhost:27017/Nav_Bar';

// creates and connects to client.
// have access to DB
var conn = MongoClient.connect(url) // returns a Promise

module.exports = conn;