const myModule = require('./myModule');
const faker = require('faker');
const axios = require('axios');

axios.get('https://api.github.com/users/romebell')
.then(function(response) {
    console.log(response.data);
})
.catch(function(err) {
    console.log(err)
});

const randomAddress = {
    streetAddress: faker.address.streetAddress(),
    city: faker.address.city(),
    zipCode: faker.address.zipCode()
};
console.log(randomAddress);

console.log(myModule);
console.log(myModule.helloWorld());
console.log(myModule.subtraction(10,6));
console.log(myModule.house);