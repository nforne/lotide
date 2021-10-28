const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};


const countLetters = function(string) {
  let results = {};
  for (let L of string) {
    if (L !== ' ') {
      if (results[L]) {
        results[L] += 1;
      } else {
        results[L] = 1;
      }
    }
  }
  return results;
};

console.log(countLetters("lighthouse in the house"));

/*
{ l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}
*/

assertEqual(countLetters("lighthouse in the house")["l"], 1);
assertEqual(countLetters("lighthouse in the house")["h"], 4);
assertEqual(countLetters("lighthouse in the house")["n"], 1);