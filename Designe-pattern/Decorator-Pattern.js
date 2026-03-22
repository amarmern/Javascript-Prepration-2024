/*
The Decorator Pattern allows you to add new functionality to an existing 
object without altering its structure. This is particularly useful when you
 want to extend the capabilities of objects dynamically.
In JavaScript, you can implement the Decorator Pattern using functions or 
classes. 
Below is an example of how to use the Decorator Pattern with classes.
*/
function Coffee() {
  this.cost = function () {
    return 5;
  };
}

function MilkDecorator(coffee) {
  const originalCost = coffee.cost();
  coffee.cost = function () {
    return originalCost + 2;
  };
}

const myCoffee = new Coffee();
MilkDecorator(myCoffee);

console.log(myCoffee.cost()); // Outputs: 7
