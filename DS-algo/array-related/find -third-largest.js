let arr = [2, 5, 8, 1, 4, 10, 7];
function thirdLargestEle(arr) {
  if (arr.length < 3) {
    return null;
  }
  let first = 0,
    second = 0,
    third = 0;
  for (let num of arr) {
    if (num > first) {
      third = second;
      second = first;
      first = num;
    } else if (num > second) {
      third = second;
      second = num;
    } else if (num > third) {
      third = num;
    }
  }
  return third;
}
const num = thirdLargestEle(arr);
console.log('The third largest element is:', num);
