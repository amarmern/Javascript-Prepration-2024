const myPromise = new Promise((ressole, reject) => {
  setTimeout(() => {
    ressole.log('data');
  }, 1000);
});

myPromise
  .then((value) => `${value} and bar`)
  .then((value) => `${value} and bar again`)
  .then((value) => `${value} and again`)
  .then((value) => `${value} and again`)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });

const promiseA = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(33);
  }, 100);
});

promiseA.then((val) => console.log(`${val}`));

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

const p = new Promise((resolve, reject) => {
  const x = 1;
  const y = 1;
  if (x === y) {
    resolve();
  } else {
    reject();
  }
});

p.then(() => console.log('success'))
  .catch(() => console.log('fail'))
  .finally(() => console.log('excuted this only'));

//or

const p1 = new Promise((resolve, reject) => {
  let a = 2;
  let b = 3;
  if (a === b) {
    resolve('success');
  } else {
    reject('fail');
  }
});

p.then((val) => {
  console.log(val);
}).catch((err) => console.log(err));

//promise is calling in the async / await method

function sleepFunction() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve('success');
    }, 2000)
  );
}

async function asyncCall() {
  console.log('calling');
  const result = await sleepFunction();
  console.log(result);
}

asyncCall();
/// Calling the promise all inside async / await

const firstPromise = () => {
  return new Promise((resolve) => {
    resolve('hello');
  });
};
const secondPromise = () => {
  return new Promise((resolve) => {
    resolve('Hi');
  });
};

const thirdPromise = () => {
  return new Promise((resolve) => {
    return setTimeout(() => {
      resolve('How, Are you?');
    }, 2000);
  });
};

let promiseExecute = async () => {
  let promise = await Promise.all([
    firstPromise(),
    secondPromise(),
    thirdPromise(),
  ]);
  console.log(promise);
};

promiseExecute();
