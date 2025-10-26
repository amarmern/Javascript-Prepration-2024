//1........................................
const str = 'a.b.c.d';

const parts = str.split('.');

console.log(parts);

let newArr = [];
for (let i = 0; i < parts.length; i++) {
  newArr.push(parts.slice(0, i + 1).join('.'));
}

console.log(newArr); //[ 'a', 'a.b', 'a.b.c', 'a.b.c.d' ]

//2..............................................

console.log(sum(2)(3)(1)(4)(5)());

function sum(a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
} //15

//3........................................

let arr = ['abc', 'pqr', 'xyz'];

let reversedArr = [];
for (let i = 0; i < arr.length; i++) {
  let reversedEle = '';
  for (let j = arr[i].length - 1; j >= 0; j--) {
    reversedEle += arr[i][j];
  }
  reversedArr.push(reversedEle);
}
console.log(reversedArr); //[ 'cba', 'rqp', 'zyx' ]

//4........................................

const mySentence = 'freeCodeCamp is an awesome resource';

let result = mySentence[0].toUpperCase();

for (let i = 1; i < mySentence.length; i++) {
  if (mySentence[i - 1] === ' ') {
    result += mySentence[i].toUpperCase();
  } else {
    result += mySentence[i];
  }
}

console.log(result);
//o/p: FreeCodeCamp Is An Awesome Resource

//5...................................................

console.log(fun(1, 2, 3, 4, 5));

function fun(...input) {
  let res = 0;
  for (let item of input) {
    res += item;
  }
  return res;
}

//6...........................................

let str = 'apple';

const ismatch = str.match(/[aeiou]/gi);

console.log(ismatch);

//7............................................

function twoSum(arr, sum) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let firstEl = arr[i];
    let secondEle = sum - firstEl;
    if (obj[secondEle]) {
      return [firstEl, secondEle];
    } else {
      obj[firstEl] = arr[i];
    }
  }
}

console.log(twoSum([2, 3, 1, 1, -1, 3, 4], 7));

//8.................................................

function fibbnociSeries(num) {
  let fib = [0, 1];
  for (let i = 2; i < num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibbnociSeries(5));

//9.........................................

function factorail(num) {
  let result = num;
  while (num > 1) {
    num--;
    result = result * num;
  }
  return result;
}
console.log(factorail(5));

//10......................................................

var intArray = [9, 1, 5, 8, 7, 4, 3, 0, 10, 13, 15, 19, 12, 16, 18]; // Missing 2,6,11,14,17

let array = Math.max.apply(this, intArray);
let missing = [];

for (let i = 0; i < array; i++) {
  if (intArray.indexOf(i) < 0) {
    missing.push(i);
  }
}

console.log(missing);

//11 bubble sort...........................................................................

let arr = [3, 1, 2, 4, 6, 5];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);

//12........................................................................

console.log(binarySearch([1, 2, 3, 4, 5], 2));

function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (value === arr[mid]) {
      return mid;
    }
    if (arr[mid] > value) {
      right = mid + 1;
    } else {
      left = mid - 1;
    }
  }
  return -1;
}

//13................................................................................

const items = [
  { name: 'Apple', category: 'Fruit' },
  { name: 'Onion', category: 'Vegetable' },
  { name: 'Orange', category: 'Fruit' },
  { name: 'Lettuce', category: 'Vegetable' },
];
//o/p : { Fruit: [ 'Apple', 'Orange' ], Vegetable: [ 'Onion', 'Lettuce' ] }
let obj = {};
for (let i = 0; i < items.length; i++) {
  let category = items[i].category;
  if (!obj[category]) {
    obj[category] = [];
  }
  obj[category].push(items[i].name);
}

console.log(obj);

//14....................................................................................

const array1 = [1, 2, 3, 4, 5];
//pollyfil map
Array.prototype.customMap = function (callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  return newArray;
};

array1.customMap(function (el) {
  console.log(el);
});

//15......................................................................

const str = 'aabcddeee';

let obj = {};

for (let i = 0; i < str.length; i++) {
  if (!obj[str[i]]) {
    obj[str[i]] = 1;
  } else {
    obj[str[i]]++;
  }
}

console.log(obj);

//16........................................................

const numbers = [1, 2, 3, 4, 2, 5, 4, 6, 3];

let obj = {};

for (let i = 0; i < numbers.length; i++) {
  if (!obj[numbers[i]]) {
    obj[numbers[i]] = 1;
  } else {
    obj[numbers[i]]++;
  }
}

//17..........................................

const numbers = [1, 2, 3, 4, 2, 5, 4, 6, 3];

let b = [];

for (let i = 0; i < numbers.length; i++) {
  if (b.indexOf(numbers[i]) == -1) {
    b.push(numbers[i]);
  }
}

console.log(b);

//18..................................................................

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let chunk = [];
let chunkSize = 3;

for (let i = 0; i < arr.length; i += chunkSize) {
  chunk.push(arr.slice(i, i + chunkSize));
}
console.log(chunk);

//19................................................................

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

//20........................................................................

console.log(sumArray([2, 3, 1, 1, -1, 3, 4], 7)); //[4,3]

function sumArray(arr, sum) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let firstEl = arr[i];
    let secondEle = sum - firstEl;
    if (obj[secondEle]) {
      console.log(firstEl, secondEle);
    } else {
      obj[firstEl] = 1;
    }
  }
}

//21..........................................................

const arr = [1, 0, 0, 1, 0, 1];

let left = 0;
let right = arr.length - 1;

while (left < right) {
  while (arr[left] === 0) {
    left++;
  }
  while (arr[right] == 1) {
    right--;
  }
  if (left < right) {
    arr[left] = 0;
    arr[right] = 1;
    left++;
    right--;
  }
}

console.log(arr);

//23.............................................................................

function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(capitalize('hi i am there'));

//24..................................find duplicate...................................................

const arr = [1, 1, 2, 3, 4, 5, 5];

let obj = {};

for (let i = 0; i < arr.length; i++) {
  if (!obj[arr[i]]) {
    obj[arr[i]] = 1;
  } else {
    obj[arr[i]]++;
  }
  if (obj[arr[i]] > 1) {
    console.log(arr[i]);
  }
}
