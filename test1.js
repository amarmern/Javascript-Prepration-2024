function stringPetterSearch(text, pattern) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (text[i + j] !== pattern[j]) {
        break;
      }
      if (pattern.length - 1 === j) {
        count++;
      }
    }
  }

  return count;
}

console.log(stringPetterSearch('lollipop', 'lol'));
