const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKey = function(object, callback) {
  let result = "undefined";
  let rsts = [];
  let keys = Object.keys(object);
  for (let i of keys) {
    if (callback(object[i])) {
      rsts.push(i);
    }
  }
  rsts.length === 0 ? result : result = rsts[0];
  return result;
};

// example
let example = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(example, "noma");