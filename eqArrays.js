const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

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

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
// recursive test cases
let e = eqArrays([[2, 3], [4, [5, [6]]]], [[2, 3], [4, [5, [6]]]]); // => true
let f = eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]); // => false
let g = eqArrays([[2, 3], [4]], [[2, 3], 4]); // => false
assertEqual(e, true);
console.log("---------------------------------------------");
assertEqual(f, false);
console.log("---------------------------------------------");
assertEqual(g, false);
console.log("---------------------------------------------");