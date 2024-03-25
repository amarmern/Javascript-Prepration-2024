const p1 = new Promise((resolve, reject) => {
  let a = 2;
  let b = 3;
  if (a === b) {
    resolve('success');
  } else {
    reject('fail');
  }
});

p1.then((val) => {
  console.log(val);
}).catch((err) => console.log(err));
