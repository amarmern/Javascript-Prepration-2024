//................................... group of item based on category..

const items = [
  { name: 'Apple', category: 'Fruit' },
  { name: 'Onion', category: 'Vegetable' },
  { name: 'Orange', category: 'Fruit' },
  { name: 'Lettuce', category: 'Vegetable' },
];

let obj = {};
for (let i = 0; i < items.length; i++) {
  let category = items[i].category;
  if (!obj[category]) {
    obj[category] = [];
  }
  obj[category].push(items[i].name);
}

console.log(obj);
//.................................................................................

//let obj = {};
for (let i of items) {
  let category = i.category;
  console.log(category);
  if (!obj[category]) {
    obj[category] = [];
  }
  obj[category].push(i.name);
}

console.log(obj);

//.........................................................................................
const groupedItem = items.reduce((acc, curr) => {
  const category = curr.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(curr.name);
  return acc;
}, {});

console.log(groupedItem);
