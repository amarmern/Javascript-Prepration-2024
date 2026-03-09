//1. Module / Revealing Module
/*
// In the traditional module pattern, you define public functions and properties directly within the returned object literal, referencing private functions as needed.

var traditionalModule = (function () {
  var privateVariable = 'I am private';

  function privateMethod() {
    console.log('I am a private method');
  }

  // Public interface defined directly here
  return {
    publicMethod: function () {
      privateMethod(); // Can access private methods
      console.log(privateVariable);
    },
    publicProperty: 'I am public',
  };
})();

//The revealing module pattern defines all functions and variables internally as private members. The final return statement then maps the desired private members to public names, essentially "revealing" them to the outside world.
var revealingModule = (function () {
  var privateVariable = "I am private";

  function privateMethod() {
    console.log("I am a private method");
  }

  function publicMethod() {
    privateMethod(); // Can access private methods
    console.log(privateVariable);
  }

  var publicProperty = "I am public";

  // Public interface mapped to internal functions/variables
  return {
    publicMethod: publicMethod,
    publicProperty: publicProperty
  };
})();

*/

//2.Singleton one shared instance (e.g., DB connection, config).
//The Singleton design pattern ensures a class has only one instance and provides a global point of access to it. It is useful for managing shared resources like configuration settings, database connections, or logging services.

//Proxy Pattern: -> Generally speaking, a proxy means a stand-in for someone else. Instead of speaking to that person directly, you’ll speak to the proxy person who will represent the person you were trying to reach. The same happens in JavaScript: instead of interacting with the target object directly, we’ll interact with the Proxy object.

// const Person = {
//   name: 'Amrendra',
//   age: '37',
//   gender: 'Male',
// };

// const proxyObject = new Proxy(Person, {});

// console.log(proxyObject);
/*
// The Factory Design Pattern in JavaScript uses a simple factory function to create objects 
// without exposing the specific creation logic to the client. This abstracts the object creation process,
//  allowing for flexibility, scalability, and loose coupling
// Define the "products" (the types of objects we want to create)
const Car = ({ model }) => ({
  model,
  drive: () => console.log(`${model} car is driving.`),
});

const Bike = ({ model }) => ({
  model,
  pedal: () => console.log(`${model} bike is pedaling.`),
});

// The Factory Function (the "creator")
const VehicleFactory = {
  createVehicle(type, info) {
    switch (type) {
      case 'car':
        return Car(info);
      case 'bike':
        return Bike(info);
      default:
        throw new Error('Invalid vehicle type specified.');
    }
  }
};

// Usage (the "client" code)
const car = VehicleFactory.createVehicle('car', { model: 'Toyota Camry' });
const bike = VehicleFactory.createVehicle('bike', { model: 'Mountain Bike' });

car.drive(); // Output: Toyota Camry car is driving.
bike.pedal(); // Output: Mountain Bike bike is pedaling.



*/
