function Person(fName, lName) {
  this.fName = fName;
  this.lName = lName;
}

Person.prototype.getFullName = function () {
  return ` my name is ${this.fName} ${this.lName}`;
};

function Student(fName, lName, grade) {
  Person.call(this, fName, lName);
  this.grade = grade;
}

Student.prototype = Person;
Student.prototype.constructor = Student;

let student1 = new Student('Adit', 'kumari', 'A');
let student2 = new Student('Shivam', 'kumar', 'A');

console.log(student1);
console.log(student2);
