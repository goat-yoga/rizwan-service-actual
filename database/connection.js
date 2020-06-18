const Mongo, { MongoClient } = require('mongodb');

let url = 'mongodb://localhost:27017/Nav_Bar';

use Nav_Bar;

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

let db = connection.getDB("Nav_Bar");

Nav_Bar.createCollection("Menu");

Nav_Bar.createCollection("Search");

module.exports = db;