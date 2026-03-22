/* 
The Factory Pattern provides a method for creating objects without specifying 
the exact class of object that will be created. 
This pattern helps in managing the creation logic of objects.

*/
function Dog(name) {
  this.name = name;
}

function Cat(name) {
  this.name = name;
}

function AnimalFactory() {
  this.createAnimal = function (type, name) {
    switch (type) {
      case 'dog':
        return new Dog(name);
      case 'cat':
        return new Cat(name);
      default:
        return null;
    }
  };
}

const factory = new AnimalFactory();
const dog = factory.createAnimal('dog', 'Rex');
const cat = factory.createAnimal('cat', 'Whiskers');

console.log(dog instanceof Dog); // Outputs: true
console.log(cat instanceof Cat); // Outputs: true
