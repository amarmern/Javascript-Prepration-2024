console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // "fl"

function longestCommonPrefix(arr) {
  let prefix = arr[0];
  for (let i = 0; i < arr.length; i++) {
    while (arr[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === '') return '';
    }
  }

  return prefix;
}
