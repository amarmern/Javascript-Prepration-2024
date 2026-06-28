function sum(...args) {
  let total = args.reduce((acc, curr) => acc + curr, 0);

  function inner(...nextArgs) {
    if (nextArgs.length === 0) {
      return total;
    }

    total += nextArgs.reduce((acc, curr) => acc + curr, 0);
    return inner;
  }

  return inner;
}

console.log(sum(1, 2)(2, 4)(3, 5)(4, 5, 6)());

console.log(sum(1)(2)(3)(4)());

function sum(a) {
  return function (b) {
    if (b !== undefined) {
      return sum(a + b);
    }
    return a;
  };
}
