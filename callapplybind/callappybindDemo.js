const person = {
  firstName: 'Amrendra',
  lastName: 'kumar',
};

function printFullName() {
  console.log(this.firstName + ' ' + this.lastName);
}

const display = printFullName.bind(person);
console.log(display());
