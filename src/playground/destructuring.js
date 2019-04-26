// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Philadelphia',
//     temp: 88
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`)

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self Published' } = book.publisher;
// console.log(publisherName)

// array destructurin

const address = ['1299 S. Juniper Street', 'Philadelphia', 'PA', '19147'];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city}, ${state}`);

const item = ['Coffee', '$2.00', '$2.50', '$3.00']

const [itemName, , price] = item;
console.log(`A medium ${itemName} costs ${price}`);
