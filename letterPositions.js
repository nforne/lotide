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

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

const letterPositions = function(string) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      if (results[string[i]]) {
        results[string[i]].push(i);
      } else {
        results[string[i]] = [i];
      }
    }
  }
  // console.log(results); //......4 debugging..........
  return results;
};

/*
{ h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }
*/

assertEqual(letterPositions("hello")["l"][0], 2);
assertArraysEquals(letterPositions("hello")["l"], [2, 3]);