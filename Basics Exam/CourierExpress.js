function courier(params) {
  let weight = Number(params[0]);
  let serviceType = params[1];
  let distance = Number(params[2]);

  let result = 0;
  switch (serviceType) {
    case "standard":
      if (weight < 1) {
        result = distance * 0.03;
      } else if (weight >= 1 && weight < 10) {
        result = distance * 0.05;
      } else if (weight >= 10 && weight < 40) {
        result = distance * 0.1;
      } else if (weight >= 40 && weight < 90) {
        result = distance * 0.15;
      } else if (weight >= 90 && weight < 150) {
        result = distance * 0.2;
      }
      break;

    case "express":
      if (weight < 1) {
        result = distance * 0.03 + weight * (0.03 * 0.8) * distance;
      } else if (weight >= 1 && weight < 10) {
        result = distance * 0.05 + weight * (0.05 * 0.4) * distance;
      } else if (weight >= 10 && weight < 40) {
        result = distance * 0.1 + weight * (0.1 * 0.05) * distance;
      } else if (weight >= 40 && weight < 90) {
        result = distance * 0.15 + weight * (0.15 * 0.02) * distance; // 19.50
      } else if (weight >= 90 && weight < 150) {
        result = distance * 0.12 + weight * (0.125 * 0.01) * distance;
      }
      break;
  }
  //let result = (distance * pricePerKm).toFixed(2);
  console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${result.toFixed(2)} lv.`);
}

courier(["1.5", "standard", "100"]);
console.log("-----------");
courier(["87", "express", "130"]);
console.log("-----------");
courier(["20", "standard", "349"]);
