function movezeroToEnd(arr: number[]): number[] {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      [arr[i], arr[count]] = [arr[count], arr[i]];
      count++;
    }
  }
  return arr;
}

console.log(movezeroToEnd([1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9]));
