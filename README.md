# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nforne/lotide`

**Require it:**

`const _ = require('@nforne/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

```jsx
const lotide = {
  assertArraysEquals : require("./assertArraysEqual"),
  assertEqual : require("./assertEqual.js"),
  eqArrays : require("./eqArrays"),
  head : require("./head"),
  middle : require("./middle"),
  tail : require("./tail"),
  eqObjects : require("./eqObjects"),
  countLetters : require("./countLetters"),
  assertObjectsEqual : require("./assertObjectsEqual"),
  countOnly : require("./countOnly"),
  findKey : require("./findKey"),
  findKeyByValue : require("./findKeyByValue"),
  flatten : require("./flatten"),
  letterPositions : require("./letterPositions"),
  map : require("./map"),
  takeUntil : require("./takeUntil"),
  without : require("./without")
};

module.exports = lotide;
```
* `function1(assertArraysEquals)`: an assertion function to establish the equality of arrays
* `function2(assertEqual)`: an assertion function to determine if two primitives are equal
* `function3(eqArrays)`: compares two arrays and establish if they're equal or not
* `function4(head)`: returns x[0] of a given array x
* `function5(middle)`: returns the middle elment(s) of a given array
* `function6(tail)`: returns an array of elments in a given array x, except x[0]
* `function7(eqObjects)`: compares two objects and establish if they're equal or not
* `function8(countLetters)`: establish the frequency of each element in a given string
* `function9(assertObjectsEqual)`: an assertion function to establish the equality of objects
* `function10(countOnly)`: selectively counts the occurrrence of given elements in a given array pool 
* `function11(findKey)`: callback operation on a given element of an object searched by its key
* `function12(findKeyByValue)`: find key by value for a given object
* `function13(flatten)`: reduce a nested array to a single level array
* `function14(letterPositions)`: returns all the indices of each element a in given string 
* `function15(map)`: takes an array and returns another after a callback operations
* `function16(takeUntil)`: takes an array and returns another after a callback operations
* `function17(without)`: selectively remove given elements from a given array
* `function18(...)`: description