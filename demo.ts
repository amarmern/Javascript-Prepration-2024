function greet(name: string): string {
  return `Hello, ${name}!`;
}

const message: string = greet('World');
console.log(message);

// Basic type
let myname: string = 'Amrendra';
let age: number = 35;
let active: boolean = false;

// function

function add(a: number, b: number): number {
  return a + b;
}

//Interface:

interface User {
  id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: 'amrendra',
};

//optional properties

interface UserDeatail extends User {
  email?: string;
}

// union type
function printId(id: number | string) {
  console.log(id);
}

//Generic
function identity<T>(Value: T): T {
  return Value;
}

//Generic Interface

interface APiResponse<T> {
  data: T;
  status: string;
}

// Enum
enum Status {
  pending,
  sucees,
  fail,
}

// Utility type

interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;
type UserName = Pick<User, 'name'>;
