/*
//Function Declrations

function mul(a, b) {
  console.log(a * b);
}

mul(2, 5);
hoist ==> possible
console.log(sqaure(2));
function sqaure(n) {
  return n * n;
}

// function expression

const mul = function (a, b) {
  console.log(a * b);
};

console.log(mul(2, 6));

//hoist => can not be hoisted
console.log(mul(2, 6));
const mul = function (a, b) {
    console.log(a * b);
  };

function f() {}
const f = 5;
console.log(f); ////Identifier 'f' has already been declared

//clouser ...

 //lexical environment

function init() {
  let name = 'mozila';
  function displayName() {
    console.log(name);
  }
  displayName();
}

init();

function myFUnc() {
  let name = 'Mozzila';
  function displayName() {
    console.log(name);
  }
  return displayName;
}

let func = myFUnc();
func();

function sum(a) {
  return function (b) {
    return a + b;
  };
}

let add3 = sum(3);
let finalAdd = add3(5);
console.log(finalAdd);
or
console.log(sum(2)(4));

//practical

const makeCounter = function () {
  let privateCounter = 0;
  function changeByVal(val) {
    return (privateCounter += val);
  }
  return {
    increment() {
      changeByVal(1);
    },
    decrement() {
      changeByVal(-1);
    },
    value() {
      return privateCounter;
    },
  };
};

const counter1 = makeCounter();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.decrement();
console.log(counter1.value());

//curry function

function calculateVolume(length) {
  return function (breadth) {
    return function (height) {
      return length * breadth * height;
    };
  };
}

let vol = calculateVolume(5)(5)(5);
console.log(vol);

//callback function and heigher order function

function add(a, b, cb) {
  let res = a + b;
  cb(res);
}

let sum = function (val) {
  console.log(val);
};
add(3, 5, sum);

//or

function add(a, b, cb) {
  let res = a + b;
  cb(res);
}

add(3, 4, (val) => {
  console.log(val);
});

/

function sum(a) {
  if (arguments.length > 1) {
    return arguments[0] + arguments[1];
  } else {
    return function (b) {
      return a + b;
    };
  }
}
console.log(sum(2, 3));
console.log(sum(2)(3)); */
