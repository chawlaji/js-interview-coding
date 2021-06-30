isAnagram = (one, two) => {
  if (one.length !== two.length) return false;
  let count = {};
  for (let character of one) {
    count[character] = (count[character] || 0) + 1;
  }
  for (let character of two) {
    if (!count[character]) return false;
    count[character]--;
  }
  return true;
};

console.log(isAnagram("harshit", "shitrah"));
