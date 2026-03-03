//right rotation
//let arr = [1, 2, 3, 4, 5, 6];
//let arr = ['a','b','c','d']; charchter also can be rotated
//o/p:[4, 5, 1, 2, 3];
//let d = 2;

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
//left rotation
//let arr = [1,2,3,4,5];
//let d = 2;
//o/p: [ 3, 4, 5, 1,2 ]
for (let i = 0; i < d; i++) {
  let temp = arr[0];
  for (let j = 0; j < arr.length - 1; j++) {
    arr[j] = arr[j + 1];
  }
  arr[arr.length - 1] = temp;
}

console.log(arr);

//second approch
//let arr = [1, 2, 3, 4, 5];
let n = arr.length;
let d = 2;
d = d % n;
let temp = [];
for (let i = 0; i < arr.length; i++) {
  temp[i] = arr[(i + d) % n];
}

console.log(temp);

/// more efffecient
let arr = [1, 2, 3, 4, 5, 6];

let k = 2;
rotateEle(arr, k);
console.log(arr);
function resverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function rotateEle(arr, k) {
  let n = arr.length;
  if (n == 0) return;
  k = k % n;
  //reverse last k  number
  resverse(arr, n - k, n - 1);
  //reverse the first n-k terms
  resverse(arr, 0, n - k - 1);
  // reverse whole elememt
  resverse(arr, 0, n - 1);
}
