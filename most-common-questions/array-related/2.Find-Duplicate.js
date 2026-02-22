//Input: [1,3,4,2,2]
//Output: 2

/*
To find duplicates in an array, start by creating an empty hashmap to track the frequency of each element.
Iterate through the array, updating the frequency count for each element in the hashmap.
 Then, iterate through the hashmap and add any element with a frequency greater than 1 to the result. 
 If no duplicates are found add -1 to the result. Finally,
 return the result containing either the duplicate elements or -1 if no duplicates were found.
*/

// JavaScript code to find duplicates in an array
// using hashmap
var containsDuplicate = function (nums) {
  let duplicate = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) !== i) {
      duplicate.push(nums[i]);
    }
  }

  return duplicate;
};

var containsDuplicate = function (nums) {
  let duplicate = [];
  nums.forEach((item, index) => {
    if (nums.indexOf(item) !== index && duplicate.indexOf(item) === -1) {
      duplicate.push(item);
    }
  });
  return duplicate;
};

console.log(containsDuplicate([1, 2, 3, 1]));

function findDuplicates(arr) {
  // Step 1: Create an empty array and hash map object  to store
  // element frequencies
  let obj = {};
  let newArr = [];
  // Step 2: Iterate through the array and
  // count element frequencies
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
    // Step 3: Iterate through the object to find duplicates
    if (obj[arr[i]] > 1) {
      newArr.push(arr[i]);
    }
  }

  // Step 4: If no duplicates found, add -1 to the result
  if (newArr.length === 0) {
    newArr.push(-1);
  }

  // Step 6: Return the result array containing
  // duplicate elements or -1
  return newArr;
}

// Driver code
const arr = [1, 6, 5, 2, 3, 3, 2];
const duplicates = findDuplicates(arr);

console.log(duplicates.join(' '));

////////////////////////////

let a = [1, 2, 3, 1, 4, 1, 2];
let b = [];
for (let i = 0; i < a.length; i++) {
  let counter = 0;
  if (b.indexOf(a[i]) === -1) {
    counter = counter + 1;
    b.push(a[i]);
  } else {
    counter = counter;
  }
}

console.log(b);
