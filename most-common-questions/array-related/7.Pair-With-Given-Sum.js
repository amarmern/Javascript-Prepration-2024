//Input: [2,7,11,15], target=9
//Output: [2,7]
/*
[Expected Approach] Using Hash Set - O(n) time and O(n) space
Hashing provides a more efficient solution to the 2-Sum problem. 
Rather than checking every possible pair, we store each number in an unordered set during iterating 
over the array's elements. For each number, we calculate its complement (i.e., target - current number) 
and check if this complement exists in the set. If it does, we have successfully found the pair 
that sums to the target. 

Time Complexity: O(n) - single pass through the array.

Space Complexity: O(n) - hashmap to store elements
*/

// Step By Step Implementations:

// Create an empty Hash Set or Unordered Set
// Iterate through the array and for each number in the array:
// => Calculate the complement (target - current number).
// => Check if the complement exists in the set:
// - If it is, then pair found.
// - If it isn’t, add the current number to the set.
// If the loop completes without finding a pair, return that no pair exists.

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]

function twoSum(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let firstEle = nums[i];
    let secondEle = target - firstEle;
    if (map[secondEle] !== undefined) {
      return [firstEle, secondEle];
    } else {
      map[nums[i]] = i;
    }
  }
}

console.log(twoSum([2, 3, 1, 1, -1, 3, 4], 7));

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]

function twoSum(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let firstEle = nums[i];
    let secondEle = target - firstEle;
    if (map[secondEle] !== undefined) {
      return [map[secondEle], i];
    } else {
      map[nums[i]] = i;
    }
  }
}
