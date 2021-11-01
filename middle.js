
const middle = function(array) {
  let outPut = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      outPut.push(array[(array.length / 2) - 1]);
      outPut.push(array[(array.length / 2)]);
    } else if (array.length % 2 !== 0) {
      outPut.push(array[Math.floor(array.length / 2)]);
    }
  } // else if (array.length <= 2) {}
  return outPut;
};

module.exports = middle;