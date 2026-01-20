const users = [
  { id: 1, name: 'jack', isActive: true, age: 20 },
  { id: 2, name: 'John', isActive: true, age: 18 },
  { id: 3, name: 'Mike', isActive: false, age: 30 },
];

// const activeUser = users
//   .filter((user) => user.isActive)
//   .map((user) => user.name);
// console.log(activeUser);

//sorting

const sortusersByAge = users.sort((user1, user2) =>
  user1.age < user2.age ? -1 : 1
);

console.log(sortusersByAge);

const activeUser = users
  .sort((user1, user2) => (user1.age < user2.age ? -1 : 1))
  .filter((user) => user.isActive)
  .map((user) => user.name);
console.log(activeUser);
