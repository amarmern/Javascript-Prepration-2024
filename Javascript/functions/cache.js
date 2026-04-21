function fibonacciMemoized(n) {
  const cache = {};

  function fibonacci(n) {
    if (n === 0 || n === 1) {
      return n;
    }

    if (cache[n]) {
      return cache[n];
    }

    const result = fibonacci(n - 1) + fibonacci(n - 2);
    cache[n] = result;
    return result;
  }

  return fibonacci(n);
}

console.log(fibonacciMemoized(5)); // Output: 5 (calculated and stored in cache)
console.log(fibonacciMemoized(5));
