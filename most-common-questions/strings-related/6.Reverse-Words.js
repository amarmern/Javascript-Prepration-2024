//Reverse Words but Keep Order
//Input: "I love JavaScript"
//Output: "I evol tpircSavaJ"

function reverseWords(str) {
  var res = '';
  var word = '';

  for (var i = 0; i <= str.length; i++) {
    if (str[i] === ' ' || i === str.length) {
      for (var j = word.length - 1; j >= 0; j--) {
        res += word[j];
      }
      if (i !== str.length) res += ' ';
      word = '';
    } else {
      word += str[i];
    }
  }
  return res;
}
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
