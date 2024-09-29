// function fac(num) {
//   let result = num;
//   while (num > 1) {
//     num--;
//     result = result * num;
//   }
//   console.log(result);
// }
// fac(5);

// let info = {
//   Name: 'Abc',
//   Age: 10,
// };

// let info1 = info;

// console.log(info, info1);

// info1.Name = 'cdf';

// console.log(info, info1);

const originalObject = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA',
  },
};

// Deep copy using JSON methods
const deepCopyObject = JSON.parse(JSON.stringify(originalObject));

// Modifying the originalObject
originalObject.name = 'Alice';
originalObject.address.city = 'Los Angeles';

console.log(originalObject);
console.log(deepCopyObject);
