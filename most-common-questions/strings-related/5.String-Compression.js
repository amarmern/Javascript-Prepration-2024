/*
How It Works (Very Simple)
Start with count = 1
Compare current character with next character
If same → increase count
If different → add character + count to result
Reset count
*/

function compressString(str) {
  var result = '';
  var count = 1;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i] + count;
      count = 1;
    }
  }
  return result;
}

console.log(compressString('aaabbcddd'));
