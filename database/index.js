const Mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

let url = 'mongodb://localhost:27017/Nav_Bar';

// use Nav_Bar;

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

var conn = MongoClient.connect('mongodb://localhost:27017/') // returns a Promise

// let db = connection.getDB("Nav_Bar");

// Nav_Bar.createCollection("Menu");

// Nav_Bar.createCollection("Search");

// module.exports = db;