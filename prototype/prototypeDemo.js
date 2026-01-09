function Person(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}
Person.prototype.greets = function () {
  return `Welcome ${this.fname} ${this.lname}`;
};

let person1 = new Person('Amrendra', 'Kumar');
console.log(person1.greets.call(person1));
//inherits
function Developer(fname, lname, tech, sal) {
  Person.call(this, fname, lname);
  this.tech = tech;
  this.sal = sal;
}
Developer.prototype.constructor = Developer;
const developer = new Developer('amrendra', 'kumar', 'js', '40');
console.log(developer);
