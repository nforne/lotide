const eqArrays = function(array1, array2) {
  let outPut = "";
  if (array1.length === array2.length && array1.length !== 0) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        outPut = false;
        break;
      } else {
        outPut = true;
      }
    }
  } else if (array1.length === array2.length && array1.length === 0) {
    outPut = true;
  }else {
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

const middle = function(array) {
  let outPut = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      outPut.push(array[(array.length/2) - 1]);
      outPut.push(array[(array.length/2)]);
    } else if (array.length % 2 !== 0) {
      outPut.push(array[Math.floor(array.length/2)]);
    }
  } // else if (array.length <= 2) {}
  return outPut;
}
let test = {examples : [

middle([1]), // => []
middle([1, 2]), // => []
middle([1, 2, 3]), // => [2]
middle([1, 2, 3, 4, 5]), // => [3]
middle([1, 2, 3, 4]), // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

], xpresults : [[], [], [2], [3], [2, 3], [3, 4]] }

let a = test["examples"];
let b = test["xpresults"]
for (let i of a) {
  console.log(i);
  for (let j of b) {
    if (a.indexOf(i) === b.indexOf(j)) {
      console.log(eqArrays(i, j));
      if (i.length > 2) {
        console.log(assertArraysEquals(i, j));
      }
    }
  }
};