const mySentence = 'freeCodeCamp is an awesome resource';

let word = mySentence.split(' ');

for (let i = 0; i < word.length; i++) {
  word[i] = word[i][0].toUpperCase() + word[i].slice(1);
}

console.log(word.join(' '));
