import { expect, assert } from "chai";
import { rgbToHexColor } from "./RGBtoHex.js";

describe("Test Suite", () => {
  it("should convert RGB values to hex format", () => {
    expect(rgbToHexColor(255, 0, 0)).to.equal("#FF0000");
    expect(rgbToHexColor(0, 255, 0)).to.equal("#00FF00");
    expect(rgbToHexColor(0, 0, 255)).to.equal("#0000FF");
    expect(rgbToHexColor(128, 128, 128)).to.equal("#808080");
  });

  it("invalid RGB values", () => {
    expect(rgbToHexColor(-1, 0, 0)).to.equal(undefined);
    expect(rgbToHexColor(256, 0, 0)).to.equal(undefined);
    expect(rgbToHexColor(0, 0, -255)).to.equal(undefined);
    expect(rgbToHexColor(-128, -1, 0)).to.equal(undefined);
  });

  it("should handle non-integer values correctly", () => {
    expect(rgbToHexColor(10.5, 0, 0)).to.equal(undefined);
    expect(rgbToHexColor(0, 20.3, 0)).to.equal(undefined);
    expect(rgbToHexColor(0, 0, 30.7)).to.equal(undefined);
  });

  it("should pad single-digit hex values with zeros", () => {
    expect(rgbToHexColor(1, 15, 255)).to.equal("#010FFF");
  });
});
