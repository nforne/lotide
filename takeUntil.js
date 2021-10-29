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


const takeUntil = function(array, callback) {
  const outPut = [];
  for (let i of array) {
    if (!callback(i)) {
      outPut.push(i);
    } else {
      break;
    }
  }
  return outPut;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEquals(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEquals(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]