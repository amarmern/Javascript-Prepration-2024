let arr = [3, 1, 2, 4, 6, 5];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i; j++) {
    if (arr[j] > arr[j + 1]) {
      //[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      //or
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);
//Bubble sort has a time complexity of O(N2) which makes it very slow for large data sets.
//in Bubble Sort algorithm,

//traverse from left and compare adjacent elements and the higher one is placed at right side.
//In this way, the largest element is moved to the rightmost end at first.
//This process is then continued to find the second largest and place it and so on until the data is sorted.

// second approach

// const bubbleSort = (arr) => {
//     let swapped;

//     do {
//       swapped = false;
//       for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//           let temp = arr[i];
//           arr[i] = arr[i + 1];
//           arr[i + 1] = temp;
//           swapped = true;
//         }
//       }
//     } while (swapped);

//     return arr;
//   };
