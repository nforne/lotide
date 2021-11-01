
const eqArrays = function(array1, array2) {
  let outPut = true;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
        if (!eqArrays(array1[i], array2[i])) {
          outPut = false;
          break;
        }
      } else if (array1[i] !== array2[i]) {
        outPut = false;
        break;
      }
    }
  } else {
    outPut = false;
  }
  return outPut;
};

module.exports = eqArrays;