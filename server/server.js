const faker = require('faker');

let names = [];
for (var i = 0; i < 3; i++) {
  var randomName = faker.name.firstName();
  names.push(randomName);
}

console.log(names);