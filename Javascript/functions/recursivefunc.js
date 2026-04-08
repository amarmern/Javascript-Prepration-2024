console.log(sumArray([1, 2, 3, 4, 5])); // 15

function sumArray(arr) {
  if (arr.length == 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}

// second version
console.log(sumArray([1, 2, 3, 4, 5], 0)); // 15 // asked in Epam

function sumArray(arr, index = 0) {
  if (arr.length == index) return 0;
  return arr[index] + sumArray(arr, index + 1);
}

function factorialRecurcivefunction(num) {
  if (num == 0 || num == 1) return 1;
  else {
    return num * factorialRecurcivefunction(num - 1);
  }
}

console.log(factorialRecurcivefunction(5));
