const mySentence = 'freeCodeCamp is an awesome resource';

const word = mySentence.split(' ');

for (let i = 0; i < word.length; i++) {
  word[i] = word[i][0].toUpperCase() + word[i].substring(1);
}
console.log(word.join(' '));

///..................................................................2nd way.....
const string = 'freeCodeCamp is an awesome resource';
let result = string[0].toUpperCase();

for (let i = 1; i < v.length; i++) {
  if (string[i - 1] === ' ') {
    result += string[i].toUpperCase();
  } else {
    result += string[i];
  }
}

console.log(result);
