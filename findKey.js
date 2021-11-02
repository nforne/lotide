
const findKey = function(object, callback) {
  let result = "undefined";
  let rsts = [];
  let keys = Object.keys(object);
  for (let i of keys) {
    if (callback(object[i])) {
      rsts.push(i);
    }
  }
  rsts.length === 0 ? result : result = rsts[0];
  return result;
};

module.exports = findKey;
