const p1 = new Promise((resolve, reject) => {
  const x = 1;
  const y = 1;
  if (x === y) {
    resolve();
  } else {
    reject();
  }
});

p1.then(() => console.log('success'))
  .catch(() => console.log('fail'))
  .finally(() => console.log('excuted this only'));
