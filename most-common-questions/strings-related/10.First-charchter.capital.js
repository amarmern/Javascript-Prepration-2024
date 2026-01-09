const mySentence = 'freeCodeCamp is an awesome resource';

const word = mySentence.split(' ');

for (let i = 0; i < word.length; i++) {
  word[i] = word[i][0].toUpperCase() + word[i].substring(1);
}
console.log(word.join(' '));
