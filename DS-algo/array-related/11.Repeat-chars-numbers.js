//................................. repeat charachter..............................

function countRepeatChar(str) {
  let obj = {};
  for (let item of str) {
    obj[item] = (obj[item] || 0) + 1;
  }

  return obj;
}

console.log(countRepeatChar('aabccddee'));

//.........................................................................//

const countRepeatChar = (str) => {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  console.log(obj);
};
countRepeatChar('aabcddeee');

//.... no of repeat item..........................................................//

var a = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4].reduce(function (acc, curr) {
  if (acc[curr]) {
    acc[curr] += 1;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});
console.log(a);
