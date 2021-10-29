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


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

// tests
console.log(assertArraysEquals(results1, [ 'g', 'c', 't', 'm', 't' ]));

const numbs = [ 15, 13, 11, 16, 10, 11, 10 ];
const results2 = map(numbs, i => i * 2);
console.log(assertArraysEquals(results2, [ 30, 26, 22, 32, 20, 22, 20]));