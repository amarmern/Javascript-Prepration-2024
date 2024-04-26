const string1 = 'abc';
const string2 = 'jklapqrcmnob';

const index = string2.match(/[abc]/g);

if (index) {
  console.log(`'${string1}' found at index ${index} in '${string2}'`);
} else {
  console.log(`'${string1}' not found in '${string2}'`);
}
