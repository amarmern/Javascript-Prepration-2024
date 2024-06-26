console.log(this === window);
function foo() {
  return this;
}

console.log(foo() === window);

const foo = {
  langaunge: 'Javascript',
  arrowfunction: () => console.log(`${this.langaunge} is simple`),
  fooMethod: function () {
    console.log(`${this.langaunge} is Awesome!!`);
  },
};

foo.arrowfunction();
foo.fooMethod();

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: (radius) => 2 * Math.PI * radius,
};

console.log(shape.diameter());
console.log(shape.perimeter(10));

let binder = shape.perimeter(10);
console.log(binder);
