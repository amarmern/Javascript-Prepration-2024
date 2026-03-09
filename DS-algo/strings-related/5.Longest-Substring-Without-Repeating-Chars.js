// The idea is to find length of longest substring with distinct characters starting from every index
// and maximum of all such lengths will be our answer.

function lengthOfLongestSubstring(str) {
  let visited = {};
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {
    let ch = str[right];

    if (visited[ch] !== undefined && visited[ch] >= left) {
      left = visited[ch] + 1; //  left will shifted by 1 position
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
