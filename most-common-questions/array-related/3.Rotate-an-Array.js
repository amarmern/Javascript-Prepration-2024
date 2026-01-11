let arr = [1, 2, 3, 4, 5, 6];
//let arr = ['a','b','c','d']; charchter also can be rotated
let d = 2;

function rotateArray(arr, d) {
  let n = arr.length;
  //Repeate the rotation d time
  for (let i = 0; i < d; i++) {
    // Right element rotate the array by one position
    let last = arr[n - 1];
    for (let j = n - 1; j > 0; j--) arr[j] = arr[j - 1];
    arr[0] = last;
  }
  return arr;
}

console.log(rotateArray(arr, d));
