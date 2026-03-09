//First Non-Repeating Character 🔥
// Input: "swiss"
// Output: "w"

//Input: "swiss"
//Output: "w"
let str = 'swiss';
let obj = {};

for (let char of str) {
  if (!obj[char]) {
    obj[char] = 1;
  } else {
    obj[char]++;
  }
}

for (let char of str) {
  if (obj[char] === 1) {
    console.log(char);
    return null;
  }
}

// second way

//Input: "swiss"
//Output: "w"
//let str = 'swiss';
//let obj = {};

for (let i = 0; i < str.length; i++) {
  if (!obj[str[i]]) {
    obj[str[i]] = 1;
  } else {
    obj[str[i]]++;
  }
}

for (let i = 0; i < str.length; i++) {
  if (obj[str[i]] === 1) {
    console.log(str[i]);
    return;
  }
}
