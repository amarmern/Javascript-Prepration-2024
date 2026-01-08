// Input: "programming"
// Output: "progamin"

let str = 'programming';

function removeDuplicate(str) {
  let obj = {};
  let res = '';

  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = true; // we have to true other wise always it go inside loop
      res += str[i];
    }
  }
  return res;
}

console.log(removeDuplicate(str));
