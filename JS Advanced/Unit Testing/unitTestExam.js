import { expect } from "chai";
import { planYourTrip } from "./PlanYourTrip.js";

describe("planYourTrip", () => {
  describe("choosingDestination", () => {
    it("valid ski resort destination in winter", () => {
      const result = planYourTrip.choosingDestination("Ski Resort", "Winter", 2024);
      expect(result).to.include("Great choice!");
    });

    it("suggesting winter for a ski resort destination in other seasons", () => {
      const result = planYourTrip.choosingDestination("Ski Resort", "Summer", 2024);
      expect(result).to.include("Consider visiting during the Winter");
    });

    it("invalid year", () => {
      expect(() => planYourTrip.choosingDestination("Ski Resort", "Winter", 2023)).to.throw("Invalid Year!");
    });

    it("destination other than Ski Resort", () => {
      expect(() => planYourTrip.choosingDestination("Beach", "Summer", 2024)).to.throw("This destination is not what you are looking for.");
    });
  });

  describe("exploreOptions", () => {
    it("options excluding the specified activity", () => {
      const activities = ["Skiing", "Snowboarding", "Winter Hiking"];
      const result = planYourTrip.exploreOptions(activities, 1);
      expect(result).to.equal("Skiing, Winter Hiking");
    });

    it("invalid input", () => {
      expect(() => planYourTrip.exploreOptions("invalid", 1)).to.throw("Invalid Information!");
      expect(() => planYourTrip.exploreOptions(["Skiing"], "invalid")).to.throw("Invalid Information!");
      expect(() => planYourTrip.exploreOptions(["Skiing"], -1)).to.throw("Invalid Information!");
      expect(() => planYourTrip.exploreOptions(["Skiing"], 2)).to.throw("Invalid Information!");
      expect(() => planYourTrip.exploreOptions(["Skiing"], 2.5)).to.throw("Invalid Information!");
      expect(() => planYourTrip.exploreOptions(3, 2)).to.throw("Invalid Information!");
      expect(() => planYourTrip.exploreOptions()).to.throw("Invalid Information!");
    });
  });

  describe("estimateExpenses", () => {
    it("budget-friendly message for total cost less than or equal to $500", () => {
      const result = planYourTrip.estimateExpenses(100, 4);
      expect(result).to.include("budget-friendly");
    });

    it("plan accordingly message for total cost greater than $500", () => {
      const result = planYourTrip.estimateExpenses(150, 4);
      expect(result).to.include("plan accordingly");
    });

    it("negative distanceInKilometers", () => {
      expect(() => planYourTrip.estimateExpenses(-100, 4)).to.throw("Invalid Information!");
    });

    it("non-numeric fuelCostPerLiter", () => {
      expect(() => planYourTrip.estimateExpenses(100, "invalid")).to.throw("Invalid Information!");
    });

    it("zero distanceInKilometers", () => {
      expect(() => planYourTrip.estimateExpenses(0, 4)).to.throw("Invalid Information!");
    });

    it("zero fuelCostPerLiter", () => {
      expect(() => planYourTrip.estimateExpenses(100, 0)).to.throw("Invalid Information!");
    });

    it("no fuelCostPerLiter", () => {
      expect(() => planYourTrip.estimateExpenses()).to.throw("Invalid Information!");
    });

    it("using float fuelCostPerLiter", () => {
      expect(() => planYourTrip.estimateExpenses(50, 3)).to.throw("Invalid Information!");
    });
  });
});
