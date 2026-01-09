/*
//.... pollyfill foreach....
const fruits = ['mango', 'apple', 'banana'];

Array.prototype.cutomForEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

fruits.cutomForEach(function (element) {
  console.log(element);
});

//.... pollyfill map....
Array.prototype.customMap = function (callback) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    arr.push(callback(this[i]));
  }
  return arr;
};

fruits.customMap(function (el) {
  console.log(el);
});



.............................
console.log(sum(2, 3));
console.log(sum(2)(3));

function sum(a) {
  if (arguments.length > 1) {
    return arguments[0] + arguments[1];
  } else {
    return function (b) {
      return a + b;
    };
  }
}

function fun(...input) {
  let res = 0;
  for (let i of input) {
    res += i;
  }
  return res;
}

console.log(fun(1, 2)); // 3
console.log(fun(1, 2, 3)); // 6
console.log(fun(1, 2, 3, 4, 5)); // 15

...............higer order function (callback)..........

function add(a, b, cb) {
  let result = a + b;
  cb(result);
}

add(4, 5, function (val) {
  console.log(val);
});

*/
