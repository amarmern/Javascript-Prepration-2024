// const arr = [3, 5, 1];
// const res = arr.sort((a, b) => (a < b ? -1 : 1));
// console.log(res);

// const arr = [3, 5, 1];
// const res = arr.sort((a, b) => a - b);
// console.log(res);

const books = [
  { name: 'Harry Potter', author: 'John' },
  { name: 'Learn JS', author: 'Maria' },
  { name: 'CSS Basics', author: 'Alice' },
];

books.sort((book1, book2) => {
  return book1.author < book2.author ? -1 : 1;
});

console.log(books);
