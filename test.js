const array = [4, 1, 7, -1, 2, 3];

let lowest = 0;
let secondLoWest = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] < lowest) {
    secondLoWest = lowest;
    lowest = array[i];
  } else if (array[i] < secondLoWest && array[i] != lowest) {
    secondLoWest = array[i];
  }
}

console.log(secondLoWest);
