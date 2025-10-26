let arr = [3, 1, 2, 4, 6, 5];

for (let i = 1; i < arr.length; i++) {
  for (let j = i; j > 0; j--) {
    if (arr[j] < arr[j - 1]) {
      //[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
    } else {
      break;
    }
  }
}

console.log(arr);

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    //move elements greater than key to one positon ahead
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
console.log(insertionSort([5, 3, 4, 1, 2]));
