function removeConsecutiveDuplicates(str) {
  let stack = [];

  for (let ch of str) {
    if (stack.length > 0 && stack[stack.length - 1] === ch) {
      stack.pop(); // remove duplicate
    } else {
      stack.push(ch);
    }
  }

  return stack.join('');
}

// Example
console.log(removeConsecutiveDuplicates('abcdeedcbazkz')); // "zkz"
/*
Sample Input:
 
"abcdeedcbazkz"
 
 
Output:
 
"zkz"
 
 
Explaination:
 
 
"abcdeedcbazkz"
 
"abcddcbazkz"
 
"abccbazkz"
 
"abbazkz"
 
"aazkz"
 
"zkz"
 
*/
