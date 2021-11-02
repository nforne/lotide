
const takeUntil = function(array, callback) {
  const outPut = [];
  for (let i of array) {
    if (!callback(i)) {
      outPut.push(i);
    } else {
      break;
    }
  }
  return outPut;
};

module.exports = takeUntil;