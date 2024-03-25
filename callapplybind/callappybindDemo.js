const person = {
  firstName: 'Amrendra',
  lastName: 'kumar',
};

function printFullName() {
  console.log(this.firstName + ' ' + this.lastName);
}

//let display = fullName.call(person);
//let display = fullName.apply(person);
//display;

const display = printFullName.bind(person);
display();
