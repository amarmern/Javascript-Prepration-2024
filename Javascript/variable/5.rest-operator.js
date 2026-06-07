// The rest operator is used in function parameters to collect all
// remaining arguments in to an array
display(1, 2, 3, 4, 5);

function display(first, second, ...resArguments) {
  console.log(first); //1
  console.log(second); //2
  console.log(resArguments); //[ 3, 4, 5 ]
}
