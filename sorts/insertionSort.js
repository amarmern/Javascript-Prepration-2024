let arr = [12, 11, 13, 5, 6];

/*
Let's sort the following array in ascending order: [12, 11, 13, 5, 6]
Initial State
Sorted Part: [12]
Unsorted Part: [11, 13, 5, 6]

Pass 1: Insert 11
The first element in the unsorted part is 11. We store it as the key. 
Compare 11 with 12.
Since 12 is greater than 11, shift 12 one position to the right. The array becomes [12, 12, 13, 5, 6].
Insert the key (11) into the empty space at index 0. 
Array now: [11, 12, 13, 5, 6]
Sorted Part: [11, 12, 13]
Unsorted Part: [5, 6]

Pass 2: Insert 13
The next element is 13. It is the key. 
Compare 13 with the element to its left, 12.
Since 13 is not smaller than 12, it is already in the correct position relative to the sorted part. 
No shifting needed.
Array now: [11, 12, 13, 5, 6]
Sorted Part: [11, 12, 13]
Unsorted Part: [5, 6]

Pass 3: Insert 5
The next element is 5. It is the key. 
Compare 5 with 13. 13 > 5, shift 13 to the right. Array: [11, 12, 13, 13, 6]
Compare 5 with 12. 12 > 5, shift 12 to the right. Array: [11, 12, 12, 13, 6]
Compare 5 with 11. 11 > 5, shift 11 to the right. Array: [11, 11, 12, 13, 6]
We reach the start of the array.
Insert the key (5) into the empty space at index 0. 
Array now: [5, 11, 12, 13, 6]
Sorted Part: [5, 11, 12, 13]
Unsorted Part: [6]

Pass 4: Insert 6
The final element is 6. It is the key. 
Compare 6 with 13. 13 > 6, shift 13. Array: [5, 11, 12, 13, 13]
Compare 6 with 12. 12 > 6, shift 12. Array: [5, 11, 12, 12, 13]
Compare 6 with 11. 11 > 6, shift 11. Array: [5, 11, 11, 12, 13]
Compare 6 with 5. 5 is not greater than 6. Stop shifting.
Insert the key (6) into the space after 5. 
Array now: [5, 6, 11, 12, 13]

Start with the second element as the first element is assumed to be sorted.
Compare the second element with the first if the second is smaller then swap them.
Move to the third element, compare it with the first two, and put it in its correct position
Repeat until the entire array is sorted.

Time Complexity

Best case: O(n), If the list is already sorted, where n is the number of elements in the list.
Average case: O(n2), If the list is randomly ordered
Worst case: O(n2), If the list is in reverse order

Space Complexity

Auxiliary Space: O(1), 
Insertion sort requires O(1) additional space, making it a space-efficient sorting algorithm.
*/

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
