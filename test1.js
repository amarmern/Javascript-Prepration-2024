const promise = new Promise(function (resolve, reject) {
  const a = 1;
  const b = 2;
  if (a === b) {
    resolve();
  } else {
    reject();
  }
});

promise.then(() => console.log('success')).catch(() => console.log('fail'));
