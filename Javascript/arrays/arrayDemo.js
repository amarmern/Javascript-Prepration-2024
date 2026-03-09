/*
//forEach method
const numbers = [1, 2, 3, 4, 2, 5, 4, 6];

let newArra = numbers.forEach((el) => el);

console.log(newArra);
sollution is:
const numbers = [1, 2, 3, 4, 2, 5, 4, 6];

numbers.forEach((number) => console.log(number));


//map mehtod

const newMapArr = numbers.map((el) => el);
console.log(newMapArr);

//filter method
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];


const val = fruits.filter((el) => el.includes('man'));
console.log(val);


let items = [1, 2, 3, 4, 5];
let evenNums = items.filter((el) => el % 2 === 0);
console.log(evenNums);

//reduce method

//1st case when intitial value is not mentioned

const array = [15, 16, 17, 18, 19];

let sum1 = array.reduce((acc, curr) => acc + curr);
console.log(sum1); // 85

//2nd case when intitial value is mentioned

let sum2 = array.reduce((acc, curr) => acc + curr, 10);
console.log(sum2); // 95

const products = [
  { name: 'macbook', price: 2000 },
  { name: 'window', price: 4000 },
  { name: 'andriod', price: 3000 },
];
//Note : I will not pass initial value the got object object
const total = products.reduce((acc, curr) => acc + curr.price, 0);
console.log(total);

const products = [
  { name: 'apple', price: 2 },
  { name: 'banana', price: 1 },
  { name: 'apple', price: 3 },
  { name: 'banana', price: 2 },
  { name: 'orange', price: 4 },
];

const sum = products.reduce((acc, curr) => {
  if (!acc[curr.name]) {
    acc[curr.name] = 0;
  }
  acc[curr.name] += curr.price;
  return acc;
}, {});

console.log(sum);

//second way
let obj = {};
for (let i = 0; i < products.length; i++) {
  if (!obj[products[i].name]) {
    obj[products[i].name] = 0;
  }
  obj[products[i].name] += products[i].price;
}
//or
for(let prod of products){
    if(!obj[prod.name]){
        obj[prod.name] =0
    }
    obj[prod.name] += prod.price
}
console.log(obj);
{ apple: 5, banana: 3, orange: 4 }


//flatMap
const friends = [
  { name: 'Anna', books: ['Bible', 'Harry Potter'] },
  { name: 'Bob', books: ['War and peace', 'Romeo and Juliet'] },
  { name: 'Alice', books: ['The Lord of the Rings', 'The Shining'] },
];
const allBooks = friends.flatMap((person) => person.books);

console.log(allBooks);

//slice
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2)); //[camel', 'duck', 'elephant']
console.log(animals.slice(2, 4)); //['camel', 'duck']

//splice methods

const months = ['Jan', 'March', 'apr', 'jun'];

months.splice(1, 0, 'Feb');
//changes the original array..
console.log(months); //["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May'); // removed second index position element and add on 4th position element.
console.log(months); //[ 'Jan', 'March', 'apr', 'jun', 'May' ]

//every method

//checks all elements in the array

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every((currentValue) => currentValue < 40));
//Expected output: true

//some method
//It returns true if, in the array, it finds an element for which the provided
// function returns true; otherwise it returns false.
const array1 = [1, 2, 3, 4, 5];

// Checks whether an element is even

console.log(array1.some((element) => element % 2 === 0));
//Expected output: true

//custom array

const array1 = [1, 2, 3, 4, 5];

Array.prototype.customForEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

const displayItem = (el) => {
  console.log(el);
};
array1.customForEach(displayItem);
console.log('..............');

Array.prototype.customMap = function (cb) {
  let newArray = [];
  for (var i = 0; i < this.length; i++) {
    newArray.push(cb(this[i]));
  }
  return newArray;
};

array1.customMap(function (el) {
  console.log(el);
});

//how many times repeat the numbers/charachters in array
const numbers = [1, 2, 3, 4, 2, 5, 4, 6, 3];
const char = countRepeatChar('aabcddeee');

function countRepeatChar(numbers) {
  let obj = {};

  for (let i = 0; i < numbers.length; i++) {
    if (!obj[numbers[i]]) {
      obj[numbers[i]] = 1;
    } else {
      obj[numbers[i]]++;
    }
  }
  return obj;
}

console.log(countRepeatChar(numbers));

//remove duplicate from array.

const numbers = [1, 2, 3, 4, 2, 5, 4, 6, 3];
let b = [];
for (let i = 0; i < numbers.length; i++) {
  if (b.indexOf(numbers[i]) === -1) {
    b.push(numbers[i]);
  }
}
console.log(b);

//chunk the array..
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let chunks = [];
let chunkSize = 3;

for (let i = 0; i < arr.length; i += chunkSize) {
  chunks.push(arr.slice(i, i + chunkSize));
}
console.log(chunks);

//.... rermove duplicate of title from array...

let person = [
  { name: "chand", age: 29 },
  { name: "chand", age: 29 },
  { name: "basha", age: 29 },
  { name: "sayyed", age: 29 }
];


books = [
  { title: 'C++', author: 'Bjarne' },
  { title: 'Java', author: 'James' },
  { title: 'Python', author: 'Guido' },
  { title: 'Java', author: 'James' },
];

let obj = {};

for (let i = 0; i < books.length; i++) {
  obj[books[i]['title']] = books[i];
}

let newBooks = [];
for (key in obj) {
  newBooks.push(obj[key]);
}
console.log(newBooks);
//grouped with category..
const items = [
  { name: 'Apple', category: 'Fruit' },
  { name: 'Onion', category: 'Vegetable' },
  { name: 'Orange', category: 'Fruit' },
  { name: 'Lettuce', category: 'Vegetable' },
];

let obj = {};
for (let i = 0; i < items.length; i++) {
  let category = items[i].category;
  if (!obj[category]) {
    obj[category] = [];
  }
  obj[category].push(items[i].name);
}
console.log(obj);
//{ Fruit: [ 'Apple', 'Orange' ], Vegetable: [ 'Onion', 'Lettuce' ] }

anaggram
let arr = ['kmno', 'okmn', 'omkn', 'dell', 'ledl', 'ok', 'ko'];
let obj = {};
for (let i = 0; i < arr.length; i++) {
  let word = arr[i].split('').sort().join('');
  if (!obj[word]) {
    obj[word] = [];
  }
  obj[word].push(arr[i]);
}
console.log(obj);
{
    kmno: [ 'kmno', 'okmn', 'omkn' ],
    dell: [ 'dell', 'ledl' ],
    ko: [ 'ok', 'ko' ]
  }

//display the total number of count from each employees of deparment
const users = [
  {
    name: 'John Doe',
    gender: 'male',
    dep: 'ECE',
  },
  {
    name: 'John',
    gender: 'male',
    dep: 'ECE',
  },
  {
    name: 'John',
    age: 20,
    gender: 'male',
    dep: 'ECE',
  },
  {
    name: 'John Doe',
    gender: 'male',
    dep: 'CSE',
  },
  {
    name: 'John',
    gender: 'male',
    dep: 'CSE',
  },
  {
    name: 'John',
    gender: 'male',
    dep: 'IT',
  },
];

let obj = {};

for (let i = 0; i < users.length; i++) {
  let userDep = users[i].dep;
  if (!obj[userDep]) {
    obj[userDep] = 1;
  } else {
    obj[userDep]++;
  }
}
console.log(obj); //{ ECE: 3, CSE: 2, IT: 1 }

const arr = [1, 0, 0, 1, 0, 1];

function segeration01(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    while (arr[left] === 0) {
      left++;
    }
    while (arr[right] === 1) {
      right--;
    }

    if (left < right) {
      arr[left] = 0;
      arr[right] = 1;
      left++;
      right--;
    }
  }
}

console.log(segeration01(arr));

const A = [
  { name: 'p1', count: 1 },
  { name: 'p2', count: 2 },
  { name: 'p3', count: 2 },
];

const p3Obj = A.find((item) => item.name === 'p3');

if (p3Obj) {
  p3Obj.count++;
}

console.log(A);
// or..
const res =A.map((item) =>(item.name === "p2" ?{...item, count: item.count+1 } : item))
console.log(res)

/// using index 

// Create a shallow copy of the array
const A_copy = [...A];

// Find the index of the object with name 'p3'
const index = A_copy.findIndex((item) => item.name === 'p3');

// If 'p3' exists in the array, increase its count by 1 in the copied array
if (index !== -1) {
  A_copy[index] = { ...A_copy[index], count: A_copy[index].count + 1 };
}

console.log(A_copy);

const newItem = A.map((item) =>
  item.name === 'p3' ? { ...item, count: item.count + 1 } : item
);

console.log(newItem);

*/
