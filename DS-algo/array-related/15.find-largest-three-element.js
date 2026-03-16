console.log(thirdLargest([3, 10, 7, 5, 12, 25, 2]));

function thirdLargest(arr) {
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
  return { first, second, third };
}
