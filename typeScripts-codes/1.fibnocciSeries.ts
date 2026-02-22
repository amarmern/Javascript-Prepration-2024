const fibnocci = (num: number = 5): number[] => {
  if (num <= 0) return [];
  if (num === 1) return [0];
  let fib: number[] = [0, 1];

  for (let i = 2; i < num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

console.log(fibnocci(1));
