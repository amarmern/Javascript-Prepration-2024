let input = {
  a: [1, 2],
  b: [2, 3],
  c: [3],
};

let obj = {};

for (let key in input) {
  for (let value of input[key]) {
    if (!obj[value]) {
      obj[value] = [];
    }
    obj[value].push(key);
  }
}

console.log(obj);
