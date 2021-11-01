const tail = require("../tail");

const assertEqual = require("../assertEqual");
const result = tail(["Hello", "Lighthouse", "Labs"]);

// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"


const assert = require('chai').assert;

describe("#tail", () => {
  it("returns 2 for result.length", () => {
    assert.strictEqual(result.length, 2);
  });

  it("returns 'Lighthouse' for result[0]", () => {
    assert.strictEqual(result[0], "Lighthouse");
  });

  it("returns 'Labs' for result[1]", () => {
    assert.strictEqual(result[1], "Labs");
  });
});