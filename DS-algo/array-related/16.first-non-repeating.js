let arr = [4, 5, 1, 2, 0, 4];
let obj = {};
for (let num of arr) {
  if (!obj[num]) {
    obj[num] = 1;
  } else {
    obj[num]++;
  }
}

for (let num of arr) {
  if (obj[num] == 1) {
    console.log(num);
    break;
  }
}
