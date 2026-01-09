/*
...................primitive and nonn primitive data type...........

let a = 1;
let b = a;
b = 2;
console.log('a=', a);
console.log('b=', b);

const A = { prop: 1 };
let B = A //(not good way)

// let B = Object.assign({}, A); // (good way)
// B.prop = 2;

//let B = { ...A };

let B = JSON.parse(JSON.stringify(A));
B.prop = 2;
console.log('A', A);
console.log('B', B);

....IBM...............

let arr = [1, 2, 1, 2, 3, 4];

let obj = {};

for (let i = 0; i < arr.length; i++) {
  if (!obj[arr[i]]) {
    obj[arr[i]] = 1;
  } else {
    obj[arr[i]] += 1;
  }
}
console.log(obj);

//Generate the random number
var myrandomnumber = Math.random(Math.round(1));
console.log(myrandomnumber);

.......service -max ..............
const arr = [5,7,[4,2,["8","6",[1,"3",[9]]]]];
let flatArray = [];

function flattenArray(input) {
  for (const item of input) {
    if (Array.isArray(item)) {
      flattenArray(item); // Recursively flatten nested arrays
    } else {
      flatArray.push(Number(item)); // Convert strings to numbers and push to flatArray
    }
  }
}
flattenArray(arr);

// Sort the flat array in descending order
for (let i = 0; i < flatArray.length; i++) {
  for (let j = i + 1; j < flatArray.length; j++) {
    if (flatArray[i] < flatArray[j]) {
      let temp = flatArray[i];
      flatArray[i] = flatArray[j];
      flatArray[j] = temp;
    }
  }
}

console.log(flatArray);

var a = 5;
(() => {
    var a;        // 'a' is hoisted to the top of this function, but not initialized
    console.log(a);  // At this point, 'a' is undefined because it hasn't been assigned a value yet
    a = 10;       // Now, 'a' is assigned the value 10
})();





.............Cognigent........................
let x = 10;
let y = 20;

x = x + y;
y = x - y;
x = x - y;

console.log(x, y);

let a = [1, 2, 4, 4, 3];

let b = [];

for (let i = 0; i < a.length; i++) {
  if (b.indexOf(a[i]) == -1) {
    b.push(a[i]);
  }
}

console.log(b);

let str = 'aba';

let res = '';
const palindrumCheck = (str) => {
  for (let i = str.length; i >= 0; i--) {
    res += str.charAt(i);
  }
  res === str ? console.log('Palindrum') : console.log('not a palindrom');
};

palindrumCheck(str);

//wissen ..
const users = [
  {
    name: 'John Doe',
    gender: 'male',
    dep: 'ECE',
  },
  {
    name: 'John',
    gender: 'male',
    dep: 'ECE',
  },
  {
    name: 'John',
    age: 20,
    gender: 'male',
    dep: 'ECE',
  },
  {
    name: 'John Doe',
    gender: 'male',
    dep: 'CSE',
  },
  {
    name: 'John',
    gender: 'male',
    dep: 'CSE',
  },
  {
    name: 'John',
    gender: 'male',
    dep: 'IT',
  },
];

let obj = {};
for (let i = 0; i < users.length; i++) {
  let newUser = users[i].dep;
  if (obj[newUser]) {
    obj[newUser]++;
  } else {
    obj[newUser] = 1;
  }
}
console.log(obj);
//second way ..

const departmentCounts = users.reduce((acc, user) => {
  acc[user.dep] = (acc[user.dep] || 0) + 1;
  return acc;
}, {});

console.log(departmentCounts);

// OUTPUT

// [{ "IT": 1 },{"CSE":2"}, {"ECE":3}]

const userInfo = [
  {
    state: "Karnataka",
    city: "Bangalore"
  },
  {
    state: "Karnataka",
    city: "mangalore"
  },
  {
    state: "Karnataka",
    city: "Udupi"
  },
  {
    state: "Karnataka",
    city: "Udupi"
  },
  {
    state: "Maharastra",
    city: "Mumbai"
  },
  {
    state: "Maharastra",
    city: "Pune"
  },
  {
    state: "Karnataka",
    city: "Udupi"
  },
  {
    state: "Maharastra",
    city: "Mumbai"
  },
  {
    state: "Maharastra",
    city: "Lonavala"
  },
  {
    state: "Tamil Nadu",
    city: "Chennai"
  },
  {
    state: "Kerala",
    city: "Wayanad"
  },
  {
    state: "Maharastra",
    city: "Mumbai"
  }
];
//1st way
let obj = {};
for (let item of userInfo) {
  let userState = item.state;
  if (!obj[userState]) {
    obj[userState] = [];
  }
  obj[userState].push(item);
}
console.log(obj);

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: (radius) => 2 * Math.PI * radius,
};

console.log(shape.diameter());
console.log(shape.perimeter(10));

let binder = shape.perimeter(10);
console.log(binder);

function generatePattern() {
  let pattern = [];
  for (let i = 1; i <= 3; i++) {
    pattern.push(Math.pow(11, i)); // Raise 11 to the power of i
  }
  return pattern;
}

// Call the function to generate the pattern
const result = generatePattern();

// Print the result
console.log(result);

function calculate(sqaures) {
  var lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (var i = 0; i < lines.length; i++) {
    var [a, b, c] = lines[i];
    if (sqaures[a] === sqaures[b] && sqaures[a] === sqaures[c]) {
      return sqaures[a];
    }
  }
  return null;
}

const sqaures = ['0', '0', '0', null, null, null, null, null, null];
//const sqaures = ['0', null, null, '0', null, null, '0', null, null];

console.log(calculate(sqaures));

const str = 'a.b.c.d';

const parts = str.split('.');

console.log(parts);

let newArr = [];
for (let i = 0; i < parts.length; i++) {
  newArr.push(parts.slice(0, i + 1).join('.'));
}

console.log(newArr); //[ 'a', 'a.b', 'a.b.c', 'a.b.c.d' ]

//second highest number find

const arr = [12, 35, 10, 35, 10, 34, 1]; 

let highest = arr[0]
for(let i =0; i< arr.length; i++){
  if(highest < arr[i] ){
      highest = arr[i]-1
  }  
}

console.log(highest)

const array = [3, 10, 7, 5, 25, 2];
const highest = array.reduce((max, num) => (num > max ? num : max), array[0]);
console.log("The highest number in the array is:", highest);


const array = [3, 10, 7, 5, 25, 2];
const highest = Math.max(...array);
console.log("The highest number in the array is:", highest);

const array = [3, 10, 7, 5, 25, 2];
let highest = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > highest) {
    highest = array[i];
  }
}

console.log("The highest number in the array is:", highest);

const array = [3, 10, 7, 5, 25, 2];

let highest = 0;
let secondHighest = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] > highest) {
    secondHighest = highest;
    highest = array[i];
  } else if (array[i] > secondHighest && array[i] !== highest) {
    secondHighest = array[i];
  }
}

console.log("The second highest number in the array is:", secondHighest);

const sortedArray = [...array].sort((a, b) => b - a);
const secondHighest = sortedArray[1];

console.log("The second highest number in the array is:", secondHighest);
...compnay asked ...


Q1.What will be the output of the following code? and explain your answer.
 
 for (var i = 0; i < 5; i++) {
 setTimeout(function() { console.log(i); }, i * 1000 );
 } /// 5,5,5,5,5
 
 
Q2.What will be the output of the following code?.
 
 console.log( "A" - "B" + 2); // NaN
 console.log(2-'2'); // 0
 console.log((1,2,3,4,5)); //5
 
Q3.What is the output of the following code?.
 
 const data = { test :"Hello" }
 data.test = "It is updated";
 console.log(data) // { test: 'It is updated' }

Q. Create Express application and Implement GET API,In side GET API read
the text file data & return the data to client, also handle the exceptions & API status codes.

const fs = require('fs');
const express = require('express');

const app = express();
let data = fs.readFile('./test.txt', 'utf-8', (data) => console.log(data));
app.get('/', (req, res) => {
  console.log(data);
  try {
    res.json({
      data,
    });
  } catch (error) {
    console.log('Fetting data issue');
  }
});

app.listen(5000, () => console.log(`service is running on 5000 port`));
.................................
const fs = require('fs');
console.log('Program has started');

setTimeout(() => {
  console.log('Timmer callback executed');
}, 0);

fs.readFile('./test.txt', 'utf-8', (err, data) =>
  console.log(' file reading call back')
);

setImmediate(() => {
  console.log('Set Immediate call back executed');
}, 100);

console.log('Program has completed');

o/p
Program has started
Program has completed
Timmer callback executed
 file reading call back
Set Immediate call back executed
or some times getting
Program has started
Program has completed
Timmer callback executed
Set Immediate call back executed
 file reading call back

//happeist mind...........

str1 = 'I am Kumar';
str2 = 'I ma ramuK';


let arr = str1.split(' ');

let reversedArr = [];
for (let i = 0; i < arr.length; i++) {
  let reverseStr = '';
  for (let j = arr[i].length - 1; j >= 0; j--) {
    reverseStr += arr[i][j];
  }
  reversedArr.push(reverseStr);
}
console.log(reversedArr.join(' '));


// string1 = 'abc';
// string2 = 'jklapqrcmnob';

const string1 = 'abc';
const string2 = 'jklapqrcmnob';

const match = string2.match(/[abc]/g);

if (match) {
  console.log(`'${string1}' found at index ${match} in '${string2}'`);
} else {
  console.log(`'${string1}' not found in '${string2}'`);
}

// let spltitStr1 = string1.split('');

// for (let i = 0; i < spltitStr1.length; i++) {
//   let spltitStr2 = string2.split('');
//   for (let j = 0; j < spltitStr2.length; j++) {
//     if (spltitStr1[i] == spltitStr2[j]) {
//       console.log(true);
//     }
//   }
// }

let str = "aba";

let storeStr = "";

const checkPlindrum = (str) => {
    for(let i = str.length -1 ; i>=0; i--){
    storeStr += str[i]
}
(storeStr === str) ? console.log("Palindrum") : console.log("not a Palindrum")
}

checkPlindrum(str)
.............wissen......................

function sleep (delay, input) {
  return new Promise((resolve) =>{
        setTimeout(()=>{
      resolve(input)
   }, delay)
    })
}

const p1 = {
    sleep: sleep
}  
    
p1.sleep(1000, "World").then(console.log); // Outputs: World after 1000ms
p1.sleep(500, "Hello").then(console.log);  // Outputs: Hello after 500ms

//sonata
const counter = function(){
   let privateCounter = 0;
   function changeBy(val){
        privateCounter += val
   }
   return {
       increment : function(){
           changeBy(1)
       },
       decrement : function(){
           changeBy(-1)
       },
       value : function(){
           return privateCounter;
       }
   }
}

const counter1 = counter()
counter1.increment();
counter1.increment();
counter1.increment();
counter1.decrement();
counter1.increment();
console.log(counter1.value())

let str = 'hi i am there'
let obj = {}

for (let i = 0; i < str.length; i++) {
    if(str[i] !== " "){
      if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }  
    }
    
  }
  
  console.log(obj)

//capegenmini
// get only duplicate record like ex: [ 1, 5 ]

const arr = [1, 2, 3, 5, 4, 5,1];
let newArr =arr.filter((e, i, a) => a.indexOf(e) !== i)

console.log(newArr)

or
// get only duplicate records from elememt
const arr = [-1, 2, 2, 2, 0, 0, 0, 500, -1, 'a', 'a', 'a']

const filtered = arr.filter((el, index) => arr.indexOf(el) !== index)
// => filtered = [ 2, 2, 0, 0, -1, 'a', 'a' ]

const duplicates = [...new Set(filtered)]

console.log(duplicates)
// => [ 2, 0, -1, 'a' ]

or
// get only duplicate records from elememt

const arr = ['hi', 'hi', 'hi', 'bye', 'bye', 'asd']

let obj = {}
let newArr = []
for(let i =0; i< arr.length; i++){
   if(!obj[arr[i]]){
    obj[arr[i]] =1
   }else{
    obj[arr[i]] ++
   }
    if(obj[arr[i]] > 1) {
        newArr.push(arr[i])
           }
   }

let setVal = [...new Set(newArr)]
console.log(setVal)

///Synicron
//get the unique record only..
let arr = [1, 2, 3, 4, 5, 6, 3, 6];

let notRepeatedElemnt = [];

for (let i = 0; i < arr.length; i++) {
  let unique = true;
  for (let j = 0; j < arr.length; j++) {
    if (i !== j && arr[i] === arr[j]) {
      unique = false;
      break;
    }
  }
  if (unique) {
    notRepeatedElemnt.push(arr[i]);
  }
}

console.log(notRepeatedElemnt);

///Zensor

// const a = 10;

// (function name(params) {
//   let a = 20;
//   console.log(a);
// })();

// console.log(a);

let arr = [1, 2, 3, 4, 5];
//console.log(arr);
for (var i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log(arr[i]);
  }, 100);
}

const year = 2024
const strYear = year.toString()
const digits = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
let res = ""
for(let i =0; i< strYear.length; i++){
     res +=  digits[strYear[i]]
}

console.log(res)


//input: 2024
//output: "TwoZero-TwoFour"

unit test

const url = 'http://127.0.0.1:3000/router';
  
  describe('The router', () => {
    test('The get route', async () => {
      const res = await axios.get(url)

      
      expect(res.status).toBe(200)
      expect(res.data).toEqual('Hello World!')
    })
  })

  //airbus
  const array = [4, 1, 7, -1, 2, 3];

let lowest = array[0];
let secondlowest = array[0];

for (let i = 0; i < array.length; i++) {
  if (array[i] < lowest) {
    secondlowest = lowest;
    lowest = array[i];
  } else if (array[i] < secondlowest && array[i] != lowest) {
    secondlowest = array[i];
  }
}
//https://www.educative.io/answers/how-to-get-second-minimum-element-of-an-array-in-javascript
console.log(lowest, secondlowest);

let str = 'How do you do';
let words = str.match(/\w+/g); //str.split('')
let obj = {};

for (let item of words) {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item]++;
  }
}

let max = 0;
let mostRepeated = '';
for (let word of words) {
  if (obj[word] > max) {
    max = obj[word];
    mostRepeated = word;
  }
}

console.log(mostRepeated);

let arr = ['MH:Pune', 'MH:Mumbai', 'Delhi:New Delhi', 'TN:Ooty'];
//{“count” 2, cities: [“Pune”, “Ooty”]}
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j <= i; j++) {
    console.log(arr[j]);
    if (arr[j].slice(2, i)) {
      newArr.push(arr[j]);
    }
  }
}

console.log(newArr);

.....

let i;
for (i = 0; i < 5; i++) {
  setTimeout(
    (function (i) {
      return function () {
        console.log(i);
      };
    })(i),
    1000
  );
}





var user = {
  name: "Vishal",
  address: {
    primary: {
      house: "109",
      street: {             
        main: "21",
        cross: "32"
      }
    }
  }
};

var flattenedUser = {
  user_name: user.name,
  user_address_primary_house: user.address.primary.house,
  user_address_primary_street_main: user.address.primary.street.main,
  user_address_primary_street_cross: user.address.primary.street.cross
};

console.log(flattenedUser);


//output

{
  user_name: "Vishal",
  user_address_primary_house: "109",
  user_address_primary_street_main: "21",
  user_address_primary_street_cross: "32",
}


const arr = ['test', 'test2', 'vikas'];
//return an object such that array elements are keys and length of the element as value
//output: {
 //   test: 4,
   // test2: 5,
    //vikas: 5
//}


const obj = arr.reduce((acc, curr) => {
   acc[curr] =  curr.length;
   return acc
},{})

console.log(obj)

const result = [1,2,3].map((a) => {
 
	return a * 2; //should be return otherwise undefined will get
 
});

console.log(result)

  
const name ="Amrendra Kumar";

let newStr =  name.split(' ')
let temp= newStr.reverse()
console.log(temp.join(" "))

ACL
let arr = [2, -4, -1, 0, 3, 5];

// Separate non-positive and positive numbers while maintaining their order
let nonPositive = arr.filter(x => x <= 0); // [-4, -1, 0]
let positive = arr.filter(x => x > 0);     // [2, 3, 5]

// Combine the two arrays
let result = [...nonPositive, ...positive];

console.log(result); // Output: [0, -4, -1, 2, 3, 5]

ktapiller
let x = [1, 2, 3];

let y = [1, 2, 3];

let z = y;

console.log(x == y);//output 

console.log(x === y);

console.log(z == y);

console.log(z == x);
 
console.log(2 + true);
 
console.log(NaN === NaN);
 
console.log(null == undefined);
 
for (var i = 0; i < 5; i++) {setTimeout(() => console.log(i))}
 
for (let i = 0; i < 5; i++) {setTimeout(() => console.log(i))}
 
function* generatorFunction() {

  yield 1;

  yield 2;

  return 3;

}
 
const generator = generatorFunction();
 
console.log(generator.next());

console.log(generator.next());

console.log(generator.next());
 ]


 /// Ellilly

 function x(){
  let a = 1;
  if(true){
  let a = 2;
    console.log("inside",a);
  }
  console.log("outside",a);
}
x();

// function example() {
//   console.log('1 ', a); 
// }
// console.log('2', a); 
// let a = 1;
// example();

// function a() {
//   console.log('1');
// }
// a();
// function a() {
//   console.log('2');
// }
// a();

console.log(a());
function a() {
  var b = function() {
    return 3;
  };
  return b();
  var b = function() {
    return 8;
  };
}

for (let i = 0; i < 10; i++) {
  ((i) => {
    setInterval(() => {
      console.log(i);
    }, i * 1000);
  })(i);
}

function sum(...input){
  let res = 0
  for(let i of input){
    res += i
  }
  return res
}

sum(1,2,3,4,5,6)

// let obj = {name: "test"}

// let obj1  = {...obj, "test2"}

let obj3 = {
  name: 'test3',
  address: {
    pin: '1223',
    contact: {
      mobile: '766765765',
    },
  },
};

let test1 = JSON.parse(JSON.stringify(obj3));

test1.address.pin = '46567';
console.log(test1);

test1.address.contact.mobile = '8787576';
console.log(test1);

//2026

function maskCardNumber(cardNumber, unmaskedStart = 4, unmaskedEnd = 4) {
  if (!cardNumber || cardNumber.length <= unmaskedStart + unmaskedEnd) {
    return cardNumber;
  }

  const start = cardNumber.slice(0, unmaskedStart);
  const end = cardNumber.slice(cardNumber.length - unmaskedEnd);

  const masked = '*'.repeat(cardNumber.length - (unmaskedStart + unmaskedEnd));
  console.log(`${start}${masked}${end}`);
}
maskCardNumber('4111111111111111');


//altimetric


function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return strs[0].substring(0, i);
      }
    }
  }

  return strs[0];
}

// Test cases
console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"]));    // ""

*/
