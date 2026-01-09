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

//////////////////////////////////////////////////////////
const person = {
  name: 'Jack',
  prop: {
    name: 'Daniel',
    getName: function () {
      return this.name;
    },
  },
};
console.log(person.prop.getName.call(person));
console.log(person.prop.getName.call(person.prop));
// if we are using bind
const result = person.prop.getName.bind(person);
console.log(result());

/////////////////////

let fullName = 'mantu kumar';
let obj = {
  fullName: 'amrendra kumar',
  prop: {
    getfullName: function () {
      return this.fullName;
    },
  },
};

console.log(obj.prop.getfullName.call(obj));
