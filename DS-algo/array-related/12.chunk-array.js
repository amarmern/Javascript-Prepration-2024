//........chunk size....
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunkSize = 3;
const chunks = [];

for (let i = 0; i < arr.length; i += chunkSize) {
  const chunk = arr.slice(i, i + chunkSize);
  chunks.push(chunk);
}

console.log(chunks); // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]])
