//(1.) Longest Substring Without Repeating Characters
let str = 'abcabcbb';
//Output: 3  // "abc"

let charMap = {};
let max = 0;
let maxChar = '';
for (let i of str) {
  if (!charMap[i]) {
    charMap[i] = 1;
  } else {
    charMap[i]++;
  }
}

for (let char in charMap) {
  if (charMap[char] > max) {
    max = charMap[char];

    maxChar = char;
  }
}
console.log(`${maxChar} -> ${max}`);
