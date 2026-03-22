/*
Similar to the Module Pattern, the Revealing Module Pattern also 
encapsulates private methods and 
variables, but it explicitly reveals only the public methods. 
This offers better control over the accessibility of variables and functions.
In the traditional module pattern, you define public functions and 
properties directly within the 
returned object literal, referencing private functions as needed.

*/

const RevealingModule = (function () {
  let privateVariable = 'I am also private';

  function privateMethod() {
    console.log(privateVariable);
  }

  function publicMethod() {
    privateMethod();
  }

  return {
    publicMethod,
  };
})();

RevealingModule.publicMethod(); // Outputs: I am also private
