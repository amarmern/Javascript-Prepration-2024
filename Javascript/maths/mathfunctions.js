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

console.log(twoSum([2, 3, 1, 1, -1, 3, 4], 7));
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

function findMissingNumber(arr) {
  const n = arr.length + 1;
  const sumOfFirstN = (n * (n + 1)) / 2;
  let sumOfArray = 0;
  for (let i = 0; i < n - 1; i++) {
    sumOfArray = sumOfArray + arr[i];
  }
  let missingNumber = sumOfFirstN - sumOfArray;
  return missingNumber;
}

const arr = [1, 2, 5, 4, 6, 8, 7];
const missingNumber = findMissingNumber(arr);
console.log('Missing Number: ', missingNumber);

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
