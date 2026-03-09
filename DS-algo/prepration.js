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

//5...................................................

console.log(fun(1, 2, 3, 4, 5));

function fun(...input) {
  let res = 0;
  for (let item of input) {
    res += item;
  }
  return res;
}

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

//18..................................................................

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let chunk = [];
let chunkSize = 3;

for (let i = 0; i < arr.length; i += chunkSize) {
  chunk.push(arr.slice(i, i + chunkSize));
}
console.log(chunk);

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

let arr = [1, 2, 3, 4, 5, 6];
let d = 2;
let n = arr.length;
for (let i = 0; i < d; i++) {
  let last = arr[n - 1];
  for (let j = n - 1; j > 0; j--) arr[j] = arr[j - 1];
  arr[0] = last;
}
console.log(arr);
