//mapping users to get usernames

//Q1>1. code to get an array of names from given array of users
// 2. Get back only active users
//3. Sort users by age in desc order

// const users = [
//   { id: 1, name: 'jack', isActive: true },
//   { id: 2, name: 'John', isActive: true },
//   { id: 3, name: 'Mike', isActive: false },
// ];

// //o/p-> ['jack','jphn', 'mike']

// const userNames = users.map((user) => user.name);

// console.log(userNames);

// Q2

// let var1;
// console.log(var1);
// console.log(typeof var1);

// Q3

// let var2 = null;
// console.log(var2);
// console.log(typeof var2);

//Q4

// console.log(foo)
// var foo =2;

//Q5

// var foo = 3;
// console.log(foo);

//Q6;clousers create a counter function which has increment and getvalue

//currying function

//console.log(multiply(2)(3));

//Q7 Remove all duplicate in the Array
// write a function which removes all duplicate in the array
//console.log(uniqueArr([1,1,2])) ;// [1,2]

//Q8 sort the array of number
//Q9 sort the array of objects by authors lastname

// const books = [
//   { name: 'Harry Potter', author: 'Joanne Rowling' },
//   { name: 'warcross', author: 'Marie Lu' },
//   { name: 'THe Hunger Games', author: 'Suzanne Collins' },
// ];

//write a function which implement a range
//console.log(range(1,50)) // [1,2,3,4....,50]

//writting the suffle function

//console.log(shuffleItems([1,2]))

//find the number of occurances of minuim value in the list

// function getItem() {
//   console.log(this);
// }
// getItem();
//what is output
// const item = {
//   title: 'Ball',
//   getItem() {
//     console.log(this);
//   },
// };

// item.getItem();

// what will be the output

// const Item = {
//   title: 'Ball',
//   getItem() {
//     console.log(this);
//   },
// };

// const item = new Item();
// item.getItem(); // Item is not a contructor

// class Item {
//   title = 'Ball';
//   getItem() {
//     console.log(this);
//   }
// }

// const item = new Item();
// item.getItem(); // Item {title: 'Ball'}

// class Item {
//   title = 'Ball';
//   getItem() {
//     [1, 2, 3].map(function (item) {
//       console.log(this);
//     });
//   }
// }

// const item = new Item();
// item.getItem();

// implement Debounce function

// const saveInput = name => console.log('saveInput' , name);
// const processChange = debounce(saveInput, 2000)
// processChange('foo')
// processChange('foo')
// processChange('foo')
// processChange('foo')
// processChange('foo')

// implement throattle

const saveInput = (name) => console.log('saveInput', name);
const processChange = throttle(saveInput, 2000);
processChange('foo');
setTimeout(() => {
  processChange('foo');
}, 1000);
setTimeout(() => {
  processChange('foo');
}, 1200);
setTimeout(() => {
  processChange('foo');
}, 2400);

processChange('foo');
processChange('foo');

//write an example of fetching data with XMLHttpRequest
// write an example of fetching data with fetch API

//Q. write an asyncronous function which executes callback after finishing it's asynchronous task
//convert call to promose

// waf to convert the time input given in 12 hours to 24 hours format

// write a function to replace parameter in url
// const initailUrl = '/post/:postId/comments/:commentId';
// constUrl = replaceParamsInUrl(initailUrl, [
//   { from: 'postId', to: '1' },
//   { from: 'commentId', to: '3' },
// ]);
// /post/1/comments/3

//Q Transfer flat list to nested lis
// const flatList = [
//   {
//     id: 1,
//     name: 'lvl 1 item 1',
//     parentId: null,
//   },
//   {
//     id: 2,
//     name: 'lvl 1 item 2',
//     parentId: null,
//   },
//   {
//     id: 3,
//     name: 'lvl 2 item 3',
//     parentId: null,
//   },
//   {
//     id: 4,
//     name: 'lvl 3 item 4',
//     parentId: null,
//   },
//   {
//     id: 5,
//     name: 'lvl 2 item 5',
//     parentId: null,
//   },
// ];

// // Result
// [
//   {
//     id: 1,
//     children: [
//       {
//         id: 3,
//         children: [{ id: 4, children: [] }],
//       },
//     ],
//   },
//   {
//     id: 2,
//     children: [
//       {
//         id: 5,
//         children: [],
//       },
//     ],
//   },
