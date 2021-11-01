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

const assertArraysEquals = function(array1, array2) {
  let outPut = "";
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        outPut = `🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`;
        break;
      } else {
        outPut = `✅✅✅Assertion Passed: ${array1} === ${array2}`;
      }
    }
  } else {
    outPut = `🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`;
  }
  console.log(outPut);
};

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
  // console.log(outPut);
  return outPut;
};

let a = without([1, 2, 3], [1]); // => [2, 3]
let b = without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
assertArraysEquals(a, [2, 3]);
assertArraysEquals(b, ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEquals(words, ["hello", "world", "lighthouse"]);

/*
const without = function(source, itemsToRemove) {
  let outPut = source;
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < source.length; j++) {
      if (itemsToRemove[i] === source[j]) {
        outPut.splice(outPut.indexOf(source[j]), 1);
      }
    }
  }
  // console.log(outPut);
  return outPut;
}
*/