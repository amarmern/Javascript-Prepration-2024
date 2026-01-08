const array = [3, 10, 7, 5, 12, 25, 2];
// function to find the second largest element in the array
function secondLargestNumber(arr) {
  let largest = 0;
  let secondLargest = 0;
  // finding the second largest element
  for (let i = 0; i < arr.length; i++) {
    // If arr[i] > largest, update second largest with
    // largest and largest with arr[i]
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    }
    // If arr[i] < largest and arr[i] > second largest,
    // update second largest with arr[i]
    else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

console.log(secondLargestNumber(array));
