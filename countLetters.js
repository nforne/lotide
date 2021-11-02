
const countLetters = function(string) {
  let results = {};
  for (let L of string) {
    if (L !== ' ') {
      if (results[L]) {
        results[L] += 1;
      } else {
        results[L] = 1;
      }
    }
  }
  return results;
};

module.exports = countLetters;