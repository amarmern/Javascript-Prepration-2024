// ..... remove the duplicate from array...
let a = [1, 2, 3, 1, 4, 1, 2];
let b = [];
for (let i = 0; i < a.length; i++) {
  if (b.indexOf(a[i]) === -1) {
    b.push(a[i]);
  }
}

console.log(b);

const items = [1, 2, 3, 1, 2, 3, 7, 8, 7];

const removeDuplicate = items.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item);
  }
  return acc;
}, []);

let removedDuplicate = items.reduce((acc, curr) => {
  if (acc.indexOf(curr) === -1) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(removeDuplicate);

console.log([...new Set(a)]);
