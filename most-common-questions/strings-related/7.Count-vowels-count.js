function countVC(str) {
  let vowels = 'aeiouAEIOU';
  let v = 0;
  let c = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
      let isVowel = false;
      for (let j = 0; j < vowels.length; j++) {
        if (char === vowels[j]) {
          isVowel = true;
        }
      }
      isVowel ? v++ : c++;
    }
  }
  return { numberOfVowels: v, numberOfConstats: c };
}

console.log(countVC('Hello How Are You ?'));
