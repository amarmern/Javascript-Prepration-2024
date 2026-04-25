let input = {
  a: [1, 2],
  b: [2, 3],
  c: [3],
};

let obj = {};

for (let key in input) {
  for (let item of input[key]) {
    if (!obj[item]) {
      obj[item] = [];
    }
    obj[item].push(key);
  }
}

console.log(obj);
