console.log('Start');
setTimeout(() => {
  console.log('Timeout 1');
}, 0);
new Promise((resolve, reject) => {
  console.log('Promise 1');
}).then((res) => console.log(res));
setTimeout(() => {
  console.log('Timeout 2');
}, 0);
new Promise((resolve, reject) => {
  console.log('Promise 2');
  resolve('Promise 2 Resolved');
}).then((res) => console.log(res));
console.log('End');
/*
Start
Promise 1
Promise 2
End
Promise 2 Resolved
Timeout 1
Timeout 2
*/
