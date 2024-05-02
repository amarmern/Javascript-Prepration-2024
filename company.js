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

let arr = [1, 2, 3, 4, [5, 6, [7, 8]]];
let res = [];
function flatArr(arr) {
  for (let item of arr) {
    if (Array.isArray(item)) {
      flatArr(item);
    } else {
      res.push(item);
    }
  }
  return res;
}

console.log(flatArr(arr));

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
const PalindrumCheck = (str) => {
  for (let i = str.length; i >= 0; i--) {
    res += str.charAt(i);
  }
  res === str ? console.log('Palindrum') : console.log('not a palindrom');
};

PalindrumCheck(str);

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

const index = string2.match(/[abc]/g);

if (index) {
  console.log(`'${string1}' found at index ${index} in '${string2}'`);
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
const arr = [1, 1, 2, 3, 4, 5, 5];
const newArr = []
for(let i=0; i< arr.length; i++){
    if(arr[i] == arr[i+1]){
        newArr.push(arr[i])
    }
    }

console.log(newArr)
//second aproch
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

function convertYearToString(year) {
    const digits = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const yearStr = year.toString();
    let result = "";
    
    for (let i = 0; i < yearStr.length; i++) {
        result += digits[parseInt(yearStr[i])];
    }
    
    return result;
}

const year = 2024;
const spokenYear = convertYearToString(year);
console.log(spokenYear); // Output: "TwoZeroTwoFour"


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

*/
