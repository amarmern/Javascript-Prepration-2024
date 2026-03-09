//Reverse Words but Keep Order
//Input: "I love JavaScript"
//Output: "I evol tpircSavaJ"
//Note: for reverse string we can write this code
console.log(reversedStr('I love JavaScript'));

function reversedStr(str) {
  let reversedStr1 = [];
  str = str.split(' ');
  for (let i = 0; i < str.length; i++) {
    let strChar = '';
    for (let j = str[i].length - 1; j >= 0; j--) {
      strChar += str[i][j];
    }
    reversedStr1.push(strChar);
  }
  return reversedStr1.join(' ');
}

//........................///////////////////
//for reverse the array we can write this code

let arr = ['abc', 'pqr', 'xyz'];
let reversedArr = [];
for (let i = 0; i < arr.length; i++) {
  let reversedEle = '';
  for (let j = arr[i].length - 1; j >= 0; j--) {
    reversedEle += arr[i][j];
  }
  reversedArr.push(reversedEle);
}
console.log(reversedArr); //[ 'cba', 'rqp', 'zyx' ]

//..............................................................................................
// str1 = 'I am Kumar';
// str2 = 'I ma ramuK';

// let arr = str1.split(' ');

// let reversedArr = [];
// for (let i = 0; i < arr.length; i++) {
//   let reverseStr = '';
//   for (let j = arr[i].length - 1; j >= 0; j--) {
//     reverseStr += arr[i][j];
//   }
//   reversedArr.push(reverseStr);
// }
// console.log(reversedArr.join(' '));
//............................................................................................
//  let str = 'I love JavaScript';
// function reverseWord(str) {
//   let reverseStr = str
//     .split(' ')
//     .map((w) => w.split('').reverse().join(''))
//     .join(' ');

//   return reverseStr;
// }

// console.log(reverseWord(str));
//............................................................................
