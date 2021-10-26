//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const head = function(array) {
  let head = "";
  if (array.length === 0) {
    head = "undefined";
  } else if (array.length !== 0) {
    head = array[0];
  }
  return head;
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>