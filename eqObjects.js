const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let result = false;
  let a = Object.keys(object1);
  let b = Object.keys(object2);
  if (a.length === b.length) {
    let count = 0;
    for (let i of a) {
      for (let j of b) {
        if (i === j && Array.isArray(object1[i]) && Array.isArray(object2[j])) {
          eqArrays(object1[i], object2[i]) === true ? count += 1 : count;
        }  else if (i === j && !Array.isArray(object1[i]) && !Array.isArray(object2[j]) && typeof object1[i] === "object" && typeof object2[j] === "object") {
          if (eqObjects(object1[i], object2[j])) {
            count += 1;
          }
        } else if (i === j && object1[i] === object2[j] && !Array.isArray(object1[i])) {
          count += 1;
        }
      }
    }
    count === a.length ? result = true : result;
  }
  return result;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
// recursive test cases
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false