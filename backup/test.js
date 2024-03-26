/*
//...swap two number...
a = 1;
b = 2;

a = a + b;
b = a - b;
a = a - b;

console.log(a, b);
[a, b] = [b, a];

console.log(a, b);

function factorialRecurcivefunction(num) {
  if (num == 0 || num == 1) return 1;
  else {
    return num * factorialRecurcivefunction(num - 1);
  }
}

console.log(factorialRecurcivefunction(5));

function factorail(num) {
  let result = num;
  while (num > 1) {
    num--;
    result = result * num;
  }
  console.log(result);
}

factorail(5);

(function fibbnociSeries(num) {
  let fib = [0, 1];
  for (let i = 2; i <= num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  console.log(fib);
})(6);

console.log(sumArray([2, 3, 1, 1, -1, 3, 4], 7));

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

//....missing number from array...
var array = [9, 1, 5, 8, 7, 4, 3, 0, 10, 13, 15, 19, 12, 16, 18]; // Missing 2,6,11,14,17

var length = Math.max.apply(this, array);

let missing = [];

for (let i = 0; i < length; i++) {
  if (array.indexOf(i) < 0) {
    missing.push(i);
  }
}

console.log(missing);

//... find the mininum number from arra..

let salary = [4000, 10000, 60000, 3000, 2000];

// console.log(Math.max.apply(this, salary));
// console.log(Math.min.apply(this, salary));

let minSal = salary[0];

for (let i = 0; i <= salary.length; i++) {
  if (salary[i] < minSal) {
    minSal = salary[i];
  }
}
console.log(minSal);


// ..... remove the duplicate from array...
let a = [1, 2, 3, 1, 4, 1, 2];
let b = [];
for (let i = 0; i < a.length; i++) {
  if (b.indexOf(a[i]) === -1) {
    b.push(a[i]);
  }
}

console.log(b);

const items = [1, 2, 3, 1, 2, 3, 7, 8, 7];

const removeDuplicate = items.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item);
  }
  return acc;
}, []);

let removedDuplicate = items.reduce((acc, curr) => {
  if (acc.indexOf(curr) === -1) {
    acc.push(curr);
  }
  return acc;
}, []);


console.log(removeDuplicate);

console.log([...new Set(a)]);

................................... group of item based on category..

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

let obj = {};
for (let i of items) {
  let category = i.category;
  console.log(category);
  if (!obj[category]) {
    obj[category] = [];
  }
  obj[category].push(i.name);
}

console.log(obj);

const groupedItem = items.reduce((acc, item) => {
  const category = item.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(item.name);
  return acc;
}, {});

console.log(groupedItem);

// ... palindrom check.....
let str = 'aba';
let store = '';

for (let i = str.length; i >= 0; i--) {
  store += str.charAt(i);
}
store == str ? console.log('Palindrom') : console.log('not a plindropm');


function VowelsCount(str) {
  const matches = str.match(/[aeiou]/gi);
  if (matches) {
    console.log(matches.length);
  } else {
    matches = 0;
  }
  matches;
}

VowelsCount('apple');

function VowelsCount(str) {
  let vowels = ['a', 'e', ' i', ' o', 'u'];
  let count = 0;
  for (char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  console.log(count);
}

//...Anagram..........

let arr = ['kmno', 'okmn', 'omkn', 'dell', 'ledl', 'ok', 'ko'];

function anagaram(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i].split('').sort().join('');
    if (!obj[word]) {
      obj[word] = [];
    }
    obj[word].push(arr[i]);
  }
  return obj;
}

console.log(anagaram(arr));

//.... rermove duplicate of title from array...
books = [
  { title: 'C++', author: 'Bjarne' },
  { title: 'Java', author: 'James' },
  { title: 'Python', author: 'Guido' },
  { title: 'Java', author: 'James' },
];

const uniq = books.filter((obj, index) => {
  return index === books.findIndex((o) => o.title === obj.title);
});

console.log(uniq);

//second method
let obj = {};

for (let i = 0; i < books.length; i++) {
  obj[books[i]['title']] = books[i];
}

let newBooks = [];
for (const key in obj) {
  newBooks.push(obj[key]);
}
console.log(newBooks);

// repeat charachter..
const countRepeatChar = (str) => {
  let obj = {};
    for (let i = 0; i < str.length; i++) {
      if (obj[str[i]]) {
        obj[str[i]] ++;
      } else {
        obj[str[i]] = 1;
      }
    }
    console.log(obj);
};
countRepeatChar('aabcddeee');

//.... no of repeat item...
var a = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4].reduce(function (acc, curr) {
  if (acc[curr]) {
    acc[curr] += 1;
  } else {
    acc[curr] = 1;
  }

  return acc;
}, {});
console.log(a);

//.... pollyfill foreach....
const fruits = ['mango', 'apple', 'banana'];

Array.prototype.cutomForEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

fruits.cutomForEach(function (element) {
  console.log(element);
});

//.... pollyfill map....
Array.prototype.customMap = function (callback) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    arr.push(callback(this[i]));
  }
  return arr;
};

fruits.customMap(function (el) {
  console.log(el);
});


//........chunk size....
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunkSize = 3;
const chunks = [];

for (let i = 0; i < arr.length; i += chunkSize) {
  const chunk = arr.slice(i, i + chunkSize);
  chunks.push(chunk);
}

console.log(chunks); // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]])

.............................
console.log(sum(2, 3));
console.log(sum(2)(3));

function sum(a) {
  if (arguments.length > 1) {
    return arguments[0] + arguments[1];
  } else {
    return function (b) {
      return a + b;
    };
  }
}

function fun(...input) {
  let res = 0;
  for (let i of input) {
    res += i;
  }
  return res;
}

console.log(fun(1, 2)); // 3
console.log(fun(1, 2, 3)); // 6
console.log(fun(1, 2, 3, 4, 5)); // 15

...............higer order function (callback)..........

function add(a, b, cb) {
  let result = a + b;
  cb(result);
}

add(4, 5, function (val) {
  console.log(val);
});

const mySentence = 'freeCodeCamp is an awesome resource';

const word = mySentence.split(' ');

for (let i = 0; i < word.length; i++) {
  word[i] = word[i][0].toUpperCase() + word[i].substring(1);
}
console.log(word.join(' '));


*/
