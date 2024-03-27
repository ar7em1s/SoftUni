/* Your tests will be supplied with a function named 'sum()'. 
It should meet the following requirements:
· Take an array of numbers as an argument;
· Return the sum of the values of all elements inside the array */

import { expect, assert } from "chai";
import { sum } from "./sumOfNumbers.js";

describe("Test", function () {
  //1. happy path -> valid data, general case; 2. error cases; 3. common edge cases
  it("works with number array", () => {
    const arr = [1, 1, 1];
    expect(sum(arr)).to.equal(3);
  });

  it("returns 0 for empty array", () => {
    expect(sum([])).to.equal(0); //if it's not too long it's not needed to define a variable
  });

  it("returns 1 for arr with one element", () => {
    expect(sum([1])).to.equal(1);
  });

  it("throws error if not an array", () => {
    expect(() => sum(1)).to.throw; //
  });
});
