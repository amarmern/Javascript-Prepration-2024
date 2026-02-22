const factorail = function (num: number): number {
  if (num == 0 || num == 1) return 1;

  let result = num;
  while (num > 1) {
    num--;
    result = result * num;
  }
  return result;
};

console.log(factorail(5));

// recursively
const factorial1 = (num: number): number => {
  if (num < 0) throw new Error('Factorial is not defined for negative numer');
  if (num === 0 || num === 1) return 1;

  return num * factorial1(num - 1);
};

console.log(factorial1(1));
