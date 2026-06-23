//1. Inside an Object Method (Implicit Binding)
//When a function is called as a method of an object (using dot notation),
//  this points to the object before the dot.

const user = {
  name: 'Aditi',
  greet() {
    console.log(`good morniong ${this.name}`);
  },
};

user.greet();

//2. Alone (Default Binding)
//When a function is called without any context (not as a method of an object),
//  this refers to the global object (window in browsers, global in Node.js).
//  In strict mode, this will be undefined.

function foo() {
  console.log(this);
}
foo(); // In non-strict mode, this will log the global object (window in browsers).
// In strict mode, it will log undefined.

//3. Inside an Arrow Function
//Arrow functions do not have their own this. Instead,
// they inherit this from the surrounding (lexical) context.
const obj = {
  name: 'Aditi',
  greet: function () {
    const arrowFunc = () => {
      console.log(`good morning ${this.name}`);
    };
    arrowFunc();
  },
};
obj.greet();

//but

const obj = {
  name: 'Aditi',
  greet: () => {
    console.log(`good morning ${this.name}`);
  },
};
obj.greet();

//Arrow functions do not get their own this binding.
// Instead, they inherit the this value from the surrounding code (lexical scope) at
//  the moment they are written.

const user = {
  name: 'Aditi',
  showName() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

user.showName();
