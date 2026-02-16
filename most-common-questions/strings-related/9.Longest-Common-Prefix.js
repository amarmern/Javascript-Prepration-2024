function longestCommonPrefix(str) {
  if (strs.length === 0) return '';

  for (let i = 0; i < str[0].length; i++) {
    // loop over first string of char
    let char = strs[0][i]; // take first char from each string

    for (let j = 1; j < str.length; j++) {
      // loop from 1
      if (str[j][i] !== char) {
        //
        return str[0].substring(0, i);
      }
    }
  }

  return str[0];
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // "fl"

//
//["flower","flow","flight"] → "fl"
