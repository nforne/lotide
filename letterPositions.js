
const letterPositions = function(string) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      if (results[string[i]]) {
        results[string[i]].push(i);
      } else {
        results[string[i]] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;