const array: number[] = [1, 2, 3, 4, 5, 6];
let d = 2;

const rotationArr = (arr: number[], d: number): number[] => {
  let n = arr.length;
  for (let i = 0; i < d; i++) {
    let last = arr[n - 1];
    for (let j = n - 1; j > 0; j--) arr[j] = arr[j - 1];
    arr[0] = last;
  }
  return arr;
};

console.log(rotationArr(array, d));
