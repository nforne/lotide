const x = require("../index")
// const middle = require("../middle");
// const assertArraysEquals = require("../assertArraysEqual");
// const eqArrays = require("../eqArrays")

let test = {examples : [

  x.middle([1]), // => []
  x.middle([1, 2]), // => []
  x.middle([1, 2, 3]), // => [2]
  x.middle([1, 2, 3, 4, 5]), // => [3]
  x.middle([1, 2, 3, 4]), // => [2, 3]
  x.middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

], xpresults : [[], [], [2], [3], [2, 3], [3, 4]] };

let a = test["examples"];
let b = test["xpresults"];
for (let i of a) {
  for (let j of b) {
    if (a.indexOf(i) === b.indexOf(j)) {
      x.assertArraysEquals(i, j)
      // console.log(eqArrays(i, j));
    }
  }
}


/*
const assert = require('chai').assert;

for (let i of a) {
  for (let j of b) {
    if (a.indexOf(i) === b.indexOf(j)) {
      // assertArraysEquals(i, j);
      describe("#middle", () => {
        it(`return true for ${i} and ${j}`, () => {
          assert.deepEqual(i,j);
        })
      })
      
    }
  }
};
*/