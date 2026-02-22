const arr = [1, 3, 4, 2, 2, 2];

const duplicate = (arr: number[]): number[] => {
  let dupl: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]} of index ${arr.indexOf(arr[i])} -> ${i}`);
    if (arr.indexOf(arr[i]) !== i && dupl.indexOf(arr[i]) == -1) {
      dupl.push(arr[i]);
    }
  }
  return dupl;
};

console.log(duplicate(arr));
