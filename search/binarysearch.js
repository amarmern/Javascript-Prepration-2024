/**
 * Binary Search - Without using recursive
 * @param arr - Input Array
 * @param searchElement - Element to search
 */
function binarySearch(arr, searchElement) {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    // Process until it is last element

    let mid = Math.floor((left + right + 1) / 2); // using floor as we may get floating numbers

    if (arr[mid] === searchElement) {
      // element found at mid
      return mid; // no need to process further
    }
    if (searchElement < arr[mid]) {
      // element might be in first half
      right = mid - 1; // right is mid - 1 because we know that mid is not correct element
    } else {
      // element might be in second half
      left = mid + 1; // left is mid + 1 because we know that mid is not correct element
    }
  }

  return -1; // element not found
}

// Invoking
console.log(binarySearch([1, 2, 3, 4, 5], 2));

/**
 * Binary Search - With recursive
 * @param arr - Input Array
 * @param searchElement - Element to search
 * @param left - Left index
 * @param right - Right index
 */
function binarySearch(arr, searchElement, left, right) {
  let mid = Math.floor((left + (right + 1)) / 2); // using floor as we may get floating numbers

  if (left <= right) {
    // If it is not the last element, process further, else return -1
    if (arr[mid] === searchElement) {
      // element found at mid
      return mid; // no need to process further
    } else if (searchElement < arr[mid]) {
      // element might be in first half
      right = mid - 1; // right is mid - 1 because we know that mid is not correct element
    } else {
      // element might be in second half
      left = mid + 1; // left is mid + 1 because we know that mid is not correct element
    }
    return this.binarySearch(arr, searchElement, left, right); // recursive
  }

  return -1; // element not found
}

// Invoking
console.log(binarySearch([1, 2, 3, 4, 5], 2, 0, 4));

/*
an average complexity around O(k*log2(n)) (where k is constant representing needless overhead).
*/
