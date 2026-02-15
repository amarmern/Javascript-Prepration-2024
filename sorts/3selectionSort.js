let arr = [5, 4, 10, 1, 6, 2];

function selectionSort(arr) {
  // total pass will be n -1
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    //find the miminum elelmet from un-order elements
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    // every time min not be eqal to i , then swap min and i
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

console.log(selectionSort(arr));
