// File name: calc.js

// exports.add = function (x, y) {
//   return x + y;
// };

// exports.sub = function (x, y) {
//   return x - y;
// };

// exports.mult = function (x, y) {
//   return x * y;
// };

// exports.div = function (x, y) {
//   return x / y;
// };

const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;

module.exports = {
  add,
  sub,
  mul,
  div,
};
