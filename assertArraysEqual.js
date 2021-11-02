// const q = require("./index")
// const eqArrays = require("./eqArrays")
//function code
const assertArraysEquals = function(array1, array2) {
  const a = require("./index")
  let outPut = "";
  if (a.eqArrays(array1, array2)) {
    outPut = `✅✅✅Assertion Passed: ${array1} === ${array2}`;
  } else {
    outPut = `🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`;
    }
  console.log(outPut);
};

module.exports = assertArraysEquals;
