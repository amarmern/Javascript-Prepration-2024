// const myPromise = new Promise((ressole, reject) => {
//   setTimeout(() => {
//     console.log('data');
//   }, 1000);
// });

// myPromise
//   .then((value) => `${value} and bar`)
//   .then((value) => `${value} and bar again`)
//   .then((value) => `${value} and again`)
//   .then((value) => `${value} and again`)
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

const promiseA = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(33);
  }, 100);
});

promiseA.then((val) => console.log(`${val}`));
