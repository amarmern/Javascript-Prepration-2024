/*The Module Pattern is used to encapsulate private variables and functions, exposing a public API.
 This pattern promotes data privacy and prevents global scope pollution. */
const Module = (function () {
  let privateVariable = 'I am private';

  function privateMethod() {
    console.log(privateVariable);
  }

  return {
    publicMethod: function () {
      privateMethod();
    },
  };
})();

Module.publicMethod(); // Outputs: I am private
