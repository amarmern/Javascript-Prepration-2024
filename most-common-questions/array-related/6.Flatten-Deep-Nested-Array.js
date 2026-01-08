//Input: [1,[2,[3,[4]]]]
//Output: [1,2,3,4]
let arr = [1, [2, [3, [4]]]];
function flatternArray(arr) {
  let flatern = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      flatternArray(item);
    } else {
      flatern.push(item);
    }
  }
  return flatern;
}

console.log(flatternArray(arr));
