function fuelTank(input) {
  let fuelType = input[0];
  let fuelQty = Number(input[1]);
  let clubCard = input[2];

  let price = 0;
  if (clubCard == "No") {
    if (fuelType == "Gas") {
      price = fuelQty * 0.93;
      if (fuelQty >= 20 && fuelQty <= 25) {
        price = fuelQty * 0.93 * 0.92;
      } else if (fuelQty > 25) {
        price = fuelQty * 0.93 * 0.9;
      } else {
        price = fuelQty * 0.93;
      }
    } else if (fuelType == "Diesel") {
      price = fuelQty * 2.33;
      if (fuelQty >= 20 && fuelQty <= 25) {
        price = fuelQty * 2.33 * 0.92;
      } else if (fuelQty > 25) {
        price = fuelQty * 2.33 * 0.9;
      } else {
        price = fuelQty * 2.33;
      }
    } else if (fuelType == "Gasoline") {
      price = fuelQty * 2.22;
      if (fuelQty >= 20 && fuelQty <= 25) {
        price = fuelQty * 2.22 * 0.92;
      } else if (fuelQty > 25) {
        price = fuelQty * 2.22 * 0.9;
      } else {
        price = fuelQty * 2.22;
      }
    }
  } else if (clubCard == "Yes") {
    if (fuelType == "Gas") {
      price = fuelQty * 0.85;
      if (fuelQty >= 20 && fuelQty <= 25) {
        price = fuelQty * 0.85 * 0.92;
      } else if (fuelQty > 25) {
        price = fuelQty * 0.85 * 0.9;
      } else {
        price = fuelQty * 0.85;
      }
    } else if (fuelType == "Diesel") {
      price = fuelQty * 2.21;
      if (fuelQty >= 20 && fuelQty <= 25) {
        price = fuelQty * 2.21 * 0.92;
      } else if (fuelQty > 25) {
        price = fuelQty * 2.21 * 0.9;
      } else {
        price = fuelQty * 2.21;
      }
    } else if (fuelType == "Gasoline") {
      price = fuelQty * 2.04;
      if (fuelQty >= 20 && fuelQty <= 25) {
        price = fuelQty * 2.04 * 0.92;
      } else if (fuelQty > 25) {
        price = fuelQty * 2.04 * 0.9;
      } else {
        price = fuelQty * 2.04;
      }
    }
  }
  console.log(`${price.toFixed(2)} lv.`);
}

fuelTank(["Gas", "30", "Yes"]); //22.95 lv.
fuelTank(["Gasoline", "25", "No"]); //51.06 lv.
fuelTank(["Diesel", "19", "No"]); // 44.27 lv.
