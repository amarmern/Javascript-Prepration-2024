console.log(sumArray([1, 2, 3, 4, 5])); // 15

function sumArray(arr) {
  if (arr.length == 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}

// second version
console.log(sumArray([1, 2, 3, 4, 5])); // 15 // asked in Epam

function sumArray(arr, index = 0) {
  if (arr.length == index) return 0;
  return arr[index] + sumArray(arr, index + 1);
}
