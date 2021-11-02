
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const g = require("./index")
  let result = false;
  let a = Object.keys(object1);
  let b = Object.keys(object2);
  if (a.length === b.length) {
    let count = 0;
    for (let i of a) {
      for (let j of b) {
        if (i === j && Array.isArray(object1[i]) && Array.isArray(object2[j])) {
          g.eqArrays(object1[i], object2[i]) === true ? count += 1 : count;
        }  else if (i === j && !Array.isArray(object1[i]) && !Array.isArray(object2[j]) && typeof object1[i] === "object" && typeof object2[j] === "object") {
          if (eqObjects(object1[i], object2[j])) {
            count += 1;
          }
        } else if (i === j && object1[i] === object2[j] && !Array.isArray(object1[i])) {
          count += 1;
        }
      }
    }
    count === a.length ? result = true : result;
  }
  return result;
};

module.exports = eqObjects;