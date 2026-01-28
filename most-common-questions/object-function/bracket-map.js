function isValid(s) {
  const stack = [];
  const bracketMap = { ')': '(', '}': '{', ']': '[' };
  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (stack.pop() !== bracketMap[char]) {
      return false;
    }
  }
  return stack.length === 0;
}

console.log(isValid('{[[]}'));
//second way
function isValid(s) {
  const stack = [];

  for (let ch of s) {
    if (ch === '(') stack.push(')');
    else if (ch === '{') stack.push('}');
    else if (ch === '[') stack.push(']');
    else if (stack.pop() !== ch) return false;
  }

  return stack.length === 0;
}
