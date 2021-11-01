const middle = require("../middle");
const assertArraysEquals = require("../assertArraysEqual");
// const eqArrays = require("../eqArrays")

let test = {examples : [

  middle([1]), // => []
  middle([1, 2]), // => []
  middle([1, 2, 3]), // => [2]
  middle([1, 2, 3, 4, 5]), // => [3]
  middle([1, 2, 3, 4]), // => [2, 3]
  middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

], xpresults : [[], [], [2], [3], [2, 3], [3, 4]] };

let a = test["examples"];
let b = test["xpresults"];
for (let i of a) {
  for (let j of b) {
    if (a.indexOf(i) === b.indexOf(j)) {
      assertArraysEquals(i, j)
      // console.log(eqArrays(i, j));
    }
  }
}