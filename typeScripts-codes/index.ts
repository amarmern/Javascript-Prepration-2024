// type UserProfile = {
//   name: string;
//   age: number;
//   address?: string;
// };

// const userProf: UserProfile = {
//   name: 'Amrendra',
//   age: 32,
// };

// function loging(useData: UserProfile): UserProfile {
//   return useData;
// }
// console.log(loging(userProf));

//...............................................................

//Interface.....................

// interface Transaction {
//   payerAccountNumber: number;
//   payeeAccountNumber: number;
// }

// interface BankAccount {
//   accountNumber: number;
//   accountHolder: string;
//   balance: number;
//   isActive: boolean;
//   transactions: Transaction[];
// }

// const transaction1: Transaction = {
//   payerAccountNumber: 123,
//   payeeAccountNumber: 456,
// };
// const transaction2: Transaction = {
//   payerAccountNumber: 123,
//   payeeAccountNumber: 456,
// };

// const bankAccount: BankAccount = {
//   accountNumber: 6567,
//   accountHolder: 'xyx',
//   balance: 1000,
//   isActive: true,
//   transactions: [transaction1, transaction2],
// };
// Merging (when two interface are same).............................................
// interface Boook {
//   name: string;
//   price: number;
// }

// interface Boook {
//   size: number;
// }

// const book: Boook = {
//   name: 'Automatic book',
//   price: 1000,
//   size: 2000,
// };

// Note duplicate type is not allow but interface can be duplicate

//Generic type

// prevent DRY
// function logAnyThing<T>(arg: T) {
//   console.log(arg);
//   return arg;
// }

// logAnyThing([4, 5]);
