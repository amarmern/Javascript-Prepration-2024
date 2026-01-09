//Input: [1,2,4,5]
//Output: 3

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

//..............

//....missing number from array...using math function ...........
var array = [9, 1, 5, 8, 7, 4, 3, 0, 10, 13, 15, 19, 12, 16, 18]; // Missing 2,6,11,14,17

var length = Math.max.apply(this, array);

let missing = [];

for (let i = 0; i < length; i++) {
  if (array.indexOf(i) < 0) {
    missing.push(i);
  }
}

console.log(missing);
