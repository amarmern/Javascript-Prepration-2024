function factorialRecurcivefunction(num) {
  if (num == 0 || num == 1) return 1;
  else {
    return num * factorialRecurcivefunction(num - 1);
  }
}

console.log(factorialRecurcivefunction(5));

function factorail(num) {
  let result = num;
  while (num > 1) {
    num--;
    result = result * num;
  }
  console.log(result);
}

factorail(5);
