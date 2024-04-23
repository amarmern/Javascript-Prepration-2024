let str = 'hi i am there';
let obj = {};
let newStr = str.trim();
for (let i = 0; i < newStr.trim().length; i++) {
  if (newStr[i] !== ' ') {
    if (!obj[newStr[i]]) {
      obj[newStr[i]] = 1;
    } else {
      obj[newStr[i]]++;
    }
  }
}

console.log(obj);
