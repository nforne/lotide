
const without = function(source, itemsToRemove) {
  let outPut = [];
  for (let i = 0; i < source.length; i++) {
    outPut.push(source[i]);
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (outPut[outPut.indexOf(source[i])] === itemsToRemove[j]) {
        outPut.splice(outPut.indexOf(source[i]), 1);
      }
    }
  }
  return outPut;
};

module.exports = without;
