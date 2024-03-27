import { expect, assert } from "chai";
import { isSymmetric } from "./CheckforSymmetry.js";

describe("Test suite", () => {
  it("Check if the array is sym", () => {
    const arr = [1, 2, 3, 3, 2, 1];
    expect(isSymmetric(arr)).to.equal(true);
  });

  it("Param array is not sym", () => {
    const arr = [1, 2, 3];
    expect(isSymmetric(arr)).to.equal(false);
  });

  it("Param array is empty", () => {
    expect(isSymmetric([])).to.equal(true);
  });

  it("Param array not an array", () => {
    expect(isSymmetric("string")).to.equal(false);
  });

  it("An array with different data types", () => {
    const arr = [1, "2", 3, "3", 2, "1"];
    expect(isSymmetric(arr)).to.equal(false);
  });
});
