/*
...................primitive and nonn primitive data type...........

// let a = 1;
// let b = a;
// b = 2;
// console.log('a=', a);
// console.log('b=', b);

const A = { prop: 1 };

// let B = Object.assign({}, A);
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

..............Altimetrik..........
let arr = [0, 1, 0, 1, 1, 1];

function segeration01(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    while (arr[left] === 0) {
      left++;
    }
    while (arr[right] === 1) {
      right--;
    }

    if (left < right) {
      arr[left] = 0;
      arr[right] = 1;
      left++;
      right--;
    }
  }
  return arr;
}

console.log(segeration01(arr));
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
console.log(shape.perimeter());

let binder = shape.perimeter(10);
console.log(binder);


//console.log(words); // Output: ["Rama", "Ramuk", "Hgnis"]

let words = 'Ram Ramul hint';

let splitWord = words.split(' ');
let reversedName = '';

// Reverse the order of the words in the string without using reverse() or join()
for (let i = splitWord.length - 1; i >= 0; i--) {
  reversedName += splitWord[i];
  if (i !== 0) {
    reversedName += ' ';
  }
}
console.log(reversedName); // Output: Hgnis Ramuk Rama


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
    console.log([a, b, c]);
    console.log(lines[i]);
    console.log(sqaures[a]);
    console.log(sqaures[b]);
    console.log(sqaures[c]);
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

*/
