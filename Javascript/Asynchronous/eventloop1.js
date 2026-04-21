/// second level....
console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
async function test() {
  console.log('Inside Async');
  await Promise.resolve();
  console.log('After Await');
}
test();
new Promise((resolve) => {
  console.log('Promise');
  resolve();
}).then(() => console.log('Promise Then'));
console.log('End');
/*
Start
Inside Async
Promise
End
After Await
Promise Then
Timeout
*/
