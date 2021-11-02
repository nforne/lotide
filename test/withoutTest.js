const q = require("../index");

let a = q.without([1, 2, 3], [1]); // => [2, 3]
let b = q.without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
q.assertArraysEquals(a, [2, 3]);
q.assertArraysEquals(b, ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
q.without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
q.assertArraysEquals(words, ["hello", "world", "lighthouse"]);

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