const mySentence = 'freeCodeCamp is an awesome resource';

let word = mySentence.split(' ');

for (let i = 0; i < word.length; i++) {
  word[i] = word[i][0].toUpperCase() + word[i].slice(1);
}

console.log(word.join(' '));

function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(capitalize('hi i am there'));

let arr = ['abc', 'pqr', 'xyz'];
let reversedArr = [];
for (let i = 0; i < arr.length; i++) {
  let reversedStr = '';
  for (let j = arr[i].length - 1; j >= 0; j--) {
    reversedStr += arr[i][j];
  }
  reversedArr.push(reversedStr);
}

console.log(reversedArr); // Output: ["cba", "rqp", "zyx"]

let str = 'aba';

let res = '';
const PalindrumCheck = (str) => {
  for (let i = str.length; i >= 0; i--) {
    res += str.charAt(i);
  }
  res === str ? console.log('Palindrum') : console.log('not a palindrom');
};

PalindrumCheck(str);
