console.log(countVC('Hello How Are You ?'));
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

//(Single Loop)
function countVC(str) {
  let v = 0,
    c = 0;
  let vowels = 'aeiouAEIOU';
  for (let ch of str) {
    if (/[a-z]/i.test(ch)) {
      vowels.includes(ch) ? v++ : c++;
    }
  }
  return { vowels: v, consonants: c };
}

//...................sample vowel count(just for practice)..................................

function VowelsCount(str) {
  const matches = str.match(/[aeiou]/gi);
  if (matches) {
    console.log(matches.length);
  } else {
    matches = 0;
  }
  matches;
}

VowelsCount('apple');

function VowelsCount(str) {
  let vowels = ['a', 'e', ' i', ' o', 'u'];
  let count = 0;
  for (char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  console.log(count);
}
