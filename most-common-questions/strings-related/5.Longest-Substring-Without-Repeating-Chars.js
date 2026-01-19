function lengthOfLongestSubstring(str) {
  let visited = {};
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {
    let ch = str[right];

    if (visited[ch] !== undefined && visited[ch] >= left) {
      left = visited[ch] + 1;
    }

    visited[ch] = right;

    let currentLength = right - left + 1;
    if (currentLength > maxLength) {
      maxLength = currentLength;
    }
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('abcdef'));
console.log(lengthOfLongestSubstring(''));
