const parent = {
  greet: function () {
    console.log('Hello from parent');
  },
};

const child = Object.create(parent);

child.sayHi = function () {
  console.log('this is from child object');
};

child.greet();
child.sayHi();
