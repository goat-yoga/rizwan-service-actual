const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./router.js');
const port = 3500;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

app.use(express.static(path.join(__dirname, 'public')));

// const faker = require('faker');

// let names = [];
// for (var i = 0; i < 3; i++) {
//   var randomName = faker.name.firstName();
//   names.push(randomName);
// }

// console.log(names);