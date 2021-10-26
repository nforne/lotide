const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

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

let a = eqArrays([1, 2, 3], [1, 2, 3]); // => true
let b = eqArrays([1, 2, 3], [3, 2, 1]); // => false
assertEqual(a, true);
assertEqual(b, false);
// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
let c = eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
let d = eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
assertEqual(c, true);
assertEqual(d, false);

/*
const eqArrays = function(array1, array2) {
  let outPut = "";
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (!(array1.includes(array2[i]))) {
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
}
*/