//The spread operator(...) is used to expand or spread elements from iterable(such as
//an aray , string, object) in to indivisual elements.
let arr = [...1, 2, 3];
console.log(arr); //1, 2, 3;
//perpose of spread operator ( there are 3 purpose of spread operaoter)
//1. copying an Array
let originalArray = [1, 2, 3];
const coppiedOfArray = [...originalArray];
console.log(coppiedOfArray); //[ 1, 2, 3 ]

//2.merging Array
const array1 = [1, 2, 3];
const array2 = [4, 5];
const mergedArray = [...array1, ...array2];
console.log(mergedArray); //[ 1, 2, 3, 4, 5 ]
//3 passing multiple Arguments to a functions
const number = [1, 2, 3, 4, 5];
sum(...number);

function sum(a, b, c, d, e) {
  console.log(a + b + c + d + e);
}
