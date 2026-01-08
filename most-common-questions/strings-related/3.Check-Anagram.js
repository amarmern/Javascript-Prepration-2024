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
