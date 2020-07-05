const aws = require("aws-sdk");
const config = require('../config/config.json');
const { productModel, popularSuggestionsModel, categoryModel, pagesModel, seedItemsIntoModel } = require('./seedGenerator.js');
const { createMiscPages } = require('./seed.js');
const faker = require('faker');
const mongoose = require('mongoose');

(async function () {

  try {
  aws.config.setPromisesDependency();
  aws.config.update({
    accessKeyId: config.aws.accessKey,
    secretAccessKey: config.aws.secretKey,
    region: 'us-west-1'
  })

  const s3 = new aws.S3();
  const response = await s3.listObjectsV2({
    Bucket: "aloyoganavbar"
  }).promise()

    .then(function (data) {

      let url = 'mongodb://localhost/Nav_Bar';
      mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

      let createProducts = () => {
        let productList = [];

        // creates obj w/ name, price, img
        for (let i = 0; i < data.Contents.length; i++) {
          let productObj = {
            name: faker.commerce.product(),
            price: Math.floor(Math.random() * 100) + 50,
            img: `https://aloyoganavbar.s3-us-west-1.amazonaws.com/${data.Contents[i].Key}`
          };

          productList.push(productObj);
        }

        return productList;
      }

      // creates list of products items and of pg names in 3 sections
      let allProducts = createProducts();
      let allPopularSuggestions = createMiscPages();
      let allCategories = createMiscPages();
      let allPages = createMiscPages();

      // seed items into its correct models
      seedItemsIntoModel(allProducts, productModel);
      seedItemsIntoModel(allPopularSuggestions, popularSuggestionsModel);
      seedItemsIntoModel(allCategories, categoryModel);
      seedItemsIntoModel(allPages, pagesModel);
    })
    catch (err) { console.error(err) }

})();

(async function () {
  try {
    aws.config.setPromisesDependency();
    aws.config.update({
      accessKeyId: config.aws.accessKey,
      secretAccessKey: config.aws.secretKey,
      region: 'us-west-1'
    });
    const s3 = new aws.S3();
    const response = await s3.listObjectsV2({
      Bucket: 'aloyoga-mock-data'
    }).promise()

      .then(function (data) {
        relatedItems = [];
        for (var i = 1; i < 346; i++) {
          const name = faker.commerce.productName();
          const price = faker.commerce.price();
          const img = faker.image.fashion();
          const cat = faker.commerce.department();
          const link =
            "http://aloyoga-mock-data.s3-us-west-1.amazonaws.com/" +
            data.Contents[i].Key;
          const entry = new Item({
            name: name,
            price: price,
            img: img,
            cat: cat,
            link: link,
          });
          relatedItems.push(entry);
        }
        Item.insertMany(relatedItems, (err, results) => {
          if (err) {
            console.error(err);
          } else {
            console.log('success in seed from s3')
          }
        })
      })
  } catch (e) {
    console.error(e);
  }
})();