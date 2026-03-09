let arr = [15, 5, 20, 35, 2, 42, 67, 17];
let target = 42;
console.log(linerSearch(arr, target));
function linerSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}
