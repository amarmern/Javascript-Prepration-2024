//.... rermove duplicate of title from array...
books = [
  { title: 'C++', author: 'Bjarne' },
  { title: 'Java', author: 'James' },
  { title: 'Python', author: 'Guido' },
  { title: 'Java', author: 'James' },
];

const uniq = books.filter((obj, index) => {
  return index === books.findIndex((o) => o.title === obj.title);
});

console.log(uniq);

//second method
let obj = {};

for (let i = 0; i < books.length; i++) {
  obj[books[i]['title']] = books[i];
}

let newBooks = [];
for (const key in obj) {
  newBooks.push(obj[key]);
}
console.log(newBooks);
