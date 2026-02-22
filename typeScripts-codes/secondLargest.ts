let largest = 0;
let secondLargest = 0;
function findSecondLargest(array: number[]): number {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      secondLargest = largest;
      largest = array[i];
    }
    if (array[i] > secondLargest && array[i] < largest) {
      secondLargest = array[i];
    }
  }
  return secondLargest;
}

console.log(findSecondLargest([3, 10, 7, 5, 12, 25, 2]));
