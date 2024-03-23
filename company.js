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

let item = arr.reduce((acc, item) => {
  if (!acc[item]) {
    acc[item] = 1;
  } else {
    acc[item] += 1;
  }
  return acc;
}, {});

console.log(item)


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
*/
