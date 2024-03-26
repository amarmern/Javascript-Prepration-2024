const A = { prop: 1 };

let B = Object.assign({}, A);

B.prop = 2;

console.log('A', A);
console.log('B', B);
