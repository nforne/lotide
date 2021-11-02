
const findKeyByValue = function(object, value) {
  let result;
  for (let i of Object.keys(object)) {
    if (object[i] === value) {
      result = i;
    }
  }
  console.log(result);
  return result;
};

module.exports = findKeyByValue;