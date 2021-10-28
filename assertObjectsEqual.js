const eqArrays = function(array1, array2) {
  let outPut = "";
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        outPut = false;
        break;
      } else {
        outPut = true;
      }
    }
  } else {
    outPut = false;
  }
  return outPut;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let result = false;
  let a = Object.keys(object1);
  let b = Object.keys(object2);
  if (a.length === b.length) {
    let count = 0;
    for (let i of a) {
      for (let j of b) {
        if (i === j && Array.isArray(object1[i]) && Array.isArray(object2[j])) {
          eqArrays(object1[i], object2[i]) === true ? count += 1 : count;
        } else if (i === j && object1[i] === object2[j] && !Array.isArray(object1[i])) {
          count += 1;
        }
      }
    }
    count === a.length ? result = true : result;
  }
  return result;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  // Implement me!
  const inspect = require('util').inspect; // <= add this line
  let outPut = "";
  if (eqObjects(object1, object2)) {
    outPut = `✅✅✅Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`;
  } else {
    outPut = `🛑🛑🛑Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`;
  }
  console.log(outPut);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true