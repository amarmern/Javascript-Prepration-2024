//comapring objects
//Two variables, two distinct objects with the same properties
const fruit = { name: 'apple' };
const fruitbear = { name: 'apple' };

console.log(fruit == fruitbear); // return false
console.log(fruit === fruitbear); // return false

const fruits = { name: 'apple' };
const fruitbears = fruits;
console.log(fruits === fruitbears); //// Here fruit and fruitbear are pointing to same object
//return true

let obj = { a: 1 };

const copy = Object.assign({}, obj);
console.log(copy);
//1st way

// const A = { prop: 1 };
// let B = Object.assign({}, A);
// B.prop = 2;
// console.log('A', A);
// console.log('B', B);

//second
// const A = { prop: 1 };
// let B = { ...A };
// B.prop = 2;
// console.log(A, B);

//3rd
const A = { prop: 1 };
let B = JSON.parse(JSON.stringify(A));
B.prop = 2;
console.log(A, B);

let school = {
  name: 'Vivekananda School',
  location: 'Delhi',
  established: '1971',
  displayInfo: function () {
    console.log(`${school.name} was established
              in ${school.established} at ${school.location}`);
  },
};
school.displayInfo();

var array = [1, 2, 3];
console.log(a);
var b = a;
console.log(b);
b[0] = 9;
console.log(b);
console.log(a);

var shalloCoppy = Object.assign([], array);
array[0] = 4;
console.log(shalloCoppy);
shalloCoppy[2] = 5;
console.log(shalloCoppy);
console.log(array);

let user1 = {
  name: 'Javascript Addicted',
  age: 34,
  university: {
    name: 'Shiraz Bahonar University',
  },
};

let user2 = JSON.parse(JSON.stringify(user1));

console.log(user2);
user2.name = 'Amrendra Kumar';
user2.university.name = 'VTU , Belgawn';

console.log(user1);
console.log(user2);
//2nd way
//using spreadr operato

let originalObject = { name: 'apple', price: { chennai: 120 } };
let clonedObject = { ...originalObject };
clonedObject.name = 'orange'; // will not reflect in originalObject
clonedObject.price.chennai = '100'; //will reflect in originalObject also, solution is deep copy

console.log(originalObject);
console.log(clonedObject);

const obj1 = {
  a: {
    c: 3,
  },
  b: 2,
};

const obj2 = {
  ...obj1,
  a: {
    ...obj1.a,
    c: 42,
  },
};

console.log(obj2);
