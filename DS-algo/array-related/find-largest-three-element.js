//Using Loops
function largestThreeElements(arr) {
  let firstLargestEle = arr[0];
  let secondLargestEle = -Infinity;
  let thirdLargestEle = -Infinity;

  for (const num of arr) {
    if (num > firstLargestEle) {
      thirdLargestEle = secondLargestEle;
      secondLargestEle = firstLargestEle;
      firstLargestEle = num;
    } else if (num > secondLargestEle) {
      thirdLargestEle = secondLargestEle;
      secondLargestEle = num;
    } else if (num > thirdLargestEle) {
      thirdLargestEle = num;
    }
  }

  return {
    'First Largest Element in Array': firstLargestEle,
    'Second Largest Element in Array': secondLargestEle,
    'Third Largest Element in Array': thirdLargestEle,
  };
}

const inputArray = [12, 56, 7, 89, 43, 21];
const outputElements = largestThreeElements(inputArray);
console.log(outputElements);
