// const a = 10;

// (function name(params) {
//   let a = 20;
//   console.log(a);
// })();

// console.log(a);

let arr = [1, 2, 3, 4, 5];
//console.log(arr);
for (var i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log(arr[i]);
  }, 100);
}
