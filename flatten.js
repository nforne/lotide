const flatten = function(array) {
  let outPut = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        outPut.push(array[i][j]);
      }
    } else {
      outPut.push(array[i]);
    }
  }
  return outPut;
};

module.exports = flatten;
