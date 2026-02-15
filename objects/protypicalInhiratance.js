function Person(fName, lName) {
  this.fName = fName;
  this.lName = lName;
}

Person.prototype.fullName = function () {
  return this.fName + ' ' + this.lName;
};

function Student(fName, lName, grade) {
  Person.call(this, fName, lName);
  this.grade = grade;
}

Student.prototype = new Person();

const std1 = new Student('AA', 'BB', 'A');
const std2 = new Student('BB', 'CC', 'B');

console.log(std1.fullName());
console.log(std2.fullName());

//// using classs

class Animal {
  eat() {
    console.log('eat');
  }
}
class Dog extends Animal {
  bark() {
    console.log('Dog is barking');
  }
}

const d = new Dog();
d.eat();
