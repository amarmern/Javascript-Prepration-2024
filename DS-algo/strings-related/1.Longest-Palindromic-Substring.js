// Input: "babad"
// Output: "bab" or "aba"
const s = 'babad';
function longestPalindrome(s) {
  let res = '';

  function expand(l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    return s.slice(l + 1, r);
  }

  for (let i = 0; i < s.length; i++) {
    let odd = expand(i, i);
    let even = expand(i, i + 1);
    res = res.length >= odd.length ? res : odd;
    res = res.length >= even.length ? res : even;
  }
  return res;
}

console.log(longestPalindrome(s));

//sample palindrom check

// ... palindrom check.....
let str = 'aba';
let store = '';

for (let i = str.length; i >= 0; i--) {
  store += str.charAt(i);
}
store == str ? console.log('Palindrom') : console.log('not a plindropm');
