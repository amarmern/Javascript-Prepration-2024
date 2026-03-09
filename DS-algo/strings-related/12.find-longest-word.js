let string = 'Pride and Prejudice';

function longestWord(string) {
  let longest = 0,
    word;
  let str = string.split(' ');
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i].length > longest) {
      longest = str[i].length;
      word = str[i];
    }
  }
  return word;
}

console.log(longestWord(string));
