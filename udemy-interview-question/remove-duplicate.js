const arr = [1, 1, 3];
const uniqueArray = (arr) => {
  let result = [];
  arr.forEach((ele) => {
    if (!result.includes(ele)) {
      result.push(ele);
    }
  });
  console.log(result);
};

uniqueArray(arr);
