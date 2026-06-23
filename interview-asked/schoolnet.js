const arr = [10, 5, 40, 25, 1000, 1];

const x = arr.sort((a, b) => a - b);

console.log(arr);

console.log(x);

const a = {
  val1: 10,
  val2: {
    val3: 30,
  },
};
const b = { ...a };
b.val1 = 60;
b.val2.val3 = 70;

console.log(a);
console.log(b);
const c = JSON.parse(JSON.stringify(a));
//structuredClone(a);// new way to deep clone
c.val1 = 80;
c.val2.val3 = 90;
/*
Implement whether a given string containing parentheses, square brackets, and curly braces is balanced.

A string is considered balanced if every opening parenthesis, square bracket, or curly brace is closed in the correct order.

For example, the following strings are balanced:


(){}[]
({[]})
([])

However, the following strings are not balanced:

"({[)}]"
((())
][
*/
let stack = [];
function bracketValidation(brackets) {
  for (let item of brackets) {
    if (item == '(') {
      stack.push(')');
    } else if (item == '{') {
      stack.push('}');
    } else if (item == '[') {
      stack.push(']');
    }
    if (item == ']') {
      stack.push('[');
    } else if (stack.pop() !== item) {
      return false;
    }
  }
  return (stack.length = 0);
}
