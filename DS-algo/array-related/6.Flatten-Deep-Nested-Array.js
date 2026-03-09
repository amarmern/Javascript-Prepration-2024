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

//// if variable is declare inside the function then we can use push and spread operator.

//let arr = [1, [2, [3, [4]]]];

function flatternArray(arr) {
  let flatern = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      flatern.push(...flatternArray(item));
    } else {
      flatern.push(item);
    }
  }
  return flatern;
}

console.log(flatternArray(arr));
