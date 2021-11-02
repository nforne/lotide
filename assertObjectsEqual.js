
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  // Implement me!
  const a = require("./index");
  const inspect = require('util').inspect; // <= add this line
  let outPut = "";
  if (a.eqObjects(object1, object2)) {
    outPut = `✅✅✅Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`;
  } else {
    outPut = `🛑🛑🛑Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`;
  }
  console.log(outPut);
};

module.exports = assertObjectsEqual;