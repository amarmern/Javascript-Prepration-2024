function Person(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}

function Developer(fname, lname, grade) {
  Person.call(this, fname, lname);
  this.grade = grade;
}

Developer.prototype = Developer;
Developer.prototype.constructor = Developer;

const developer = new Developer('amrendra', 'kumar', '40');

console.log(developer);
