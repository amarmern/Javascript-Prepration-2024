function isAnagram(a, b) {
  let obj = {};
  if (a.length != b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (!obj[a[i]]) {
      obj[a[i]] = 1;
    } else {
      obj[a[i]]++;
    }
  }

  for (let i = 0; i < b.length; i++) {
    if (!obj[b[i]]) {
      return false;
    }
    obj[b[i]]--;
  }
  return true;
}

console.log(isAnagram('listen', 'silent'));

//...Anagram..........

let arr = ['kmno', 'okmn', 'omkn', 'dell', 'ledl', 'ok', 'ko'];

function anagaram(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i].split('').sort().join('');
    if (!obj[word]) {
      obj[word] = [];
    }
    obj[word].push(arr[i]);
  }
  return obj;
}

console.log(anagaram(arr));
