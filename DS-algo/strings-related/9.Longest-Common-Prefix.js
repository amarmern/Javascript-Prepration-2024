// JavaScript program to find the longest common prefix
// using Sorting

function longestCommonPrefix(arr) {
  // Sort the array of strings
  arr.sort();
  console.log(arr);
  // Get the first and last strings after sorting
  let first = arr[0];
  let last = arr[arr.length - 1];
  let minLength = Math.min(first.length, last.length);
  console.log(minLength);
  let i = 0;

  // Find the common prefix between the first and
  // last strings
  while (i < minLength && first[i] === last[i]) {
    i++;
  }

  // Return the common prefix
  return first.substring(0, i);
}

// Driver Code
let arr = ['geeksforgeeks', 'geeks', 'geek', 'geezer'];
console.log(longestCommonPrefix(arr));

function longestCommonPrefix(str) {
  if (strs.length === 0) return '';

  for (let i = 0; i < str[0].length; i++) {
    // loop over first string of char
    let char = strs[0][i]; // take first char from each string

    for (let j = 1; j < str.length; j++) {
      // loop from 1
      if (str[j][i] !== char) {
        //
        return str[0].substring(0, i);
      }
    }
  }

  return str[0];
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // "fl"

//
//["flower","flow","flight"] → "fl"
