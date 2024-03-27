import { expect, assert } from "chai";
import { motorcycleRider } from "./Motorcycle Rider.js";

//const assert = require("chai").assert;

describe("motorcycleRider", function () {
  describe("licenseRestriction", function () {
    it("should return information for category AM", function () {
      const result = motorcycleRider.licenseRestriction("AM");
      assert.equal(result, "Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.");
    });

    it("should return information for category A1", function () {
      const result = motorcycleRider.licenseRestriction("A1");
      assert.equal(result, "Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.");
    });

    it("should return information for category A2", function () {
      const result = motorcycleRider.licenseRestriction("A2");
      assert.equal(result, "Motorcycles with maximum power of 35KW. and the minimum age is 18.");
    });

    it("should return information for category A", function () {
      const result = motorcycleRider.licenseRestriction("A");
      assert.equal(result, "No motorcycle restrictions, and the minimum age is 24.");
    });

    it("should throw an error for invalid category", function () {
      assert.throw(() => motorcycleRider.licenseRestriction("invalidCategory"), Error, "Invalid Information!");
    });
  });

  describe("motorcycleShowroom", function () {
    it("should return the correct message for valid input", function () {
      const result = motorcycleRider.motorcycleShowroom([100, 120, 130], 150);
      assert.equal(result, "There are 3 available motorcycles matching your criteria!");
    });

    it("should throw an error for invalid input", function () {
      assert.throw(() => motorcycleRider.motorcycleShowroom("invalidInput", 150), Error, "Invalid Information!");
    });
  });

  describe("otherSpendings", function () {
    it("should return the correct message with discount", function () {
      const result = motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil", "oil filter"], true);
      assert.equal(result, "You spend $513.00 for equipment and consumables with 10% discount!");
    });

    it("should return the correct message without discount", function () {
      const result = motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil", "oil filter"], false);
      assert.equal(result, "You spend $570.00 for equipment and consumables!");
    });

    it("should throw an error for invalid input", function () {
      assert.throw(() => motorcycleRider.otherSpendings("invalidInput", ["engine oil", "oil filter"], true), Error, "Invalid Information!");
    });
  });
});
