function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

let newObj = new Person('amar', 35, 'male');
let myFather = new Person('suchit', 70, 'M');

//adding the property;

Person.prototype.occupation = 'SE';

// adding the methods

Person.prototype.greet = function () {
  console.log('hello ,', this.name, this.occupation);
};

newObj.greet();
