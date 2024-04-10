const arr1 = ['1', '3', '5', 'Trika', '5', '1', 'Trika'];
let obj = {};
for (let index = 0; index < arr1.length; index++) {
  const element = arr1[index];
  if (!obj[element]) {
    obj[element] = [];
  }
  obj[element].push(element);
}
console.log(obj);

const array1 = [17, 12, 23, 11, 10, 67, 'test', 'develop', 6, 5];
const array2 = [13, 3, 17, 23, 10, 34, 'develop', 5, 6, 'test'];

const resultObject = {
  found: [],
  notFound: [],
};

for (let i = 0; i < array1.length; i++) {
  for (let j = 0; j < array2.length; j++) {
    if (array1[i] === array2[j]) {
      //console.log(resultObject.found.push(array1[i]));
      //resultObject.found.push(array1[i], array2[j])
      //[resultObject ,array1[i]}]
    } else {
      // console.log(resultObject.notFound.push(array1[i]));
    }
  }
}
//console.log(resultObject.found);
//console.log(resultObject.notFound);
