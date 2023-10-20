function fuel(input) {
  let fuelType = input[0];
  let fuelLiters = input[1];

  if (fuelType != "Diesel" && fuelType != "Gasoline" && fuelType != "Gas") {
    console.log("Invalid fuel!");
  } else {
    if (fuelLiters >= 25) {
      console.log(`You have enough ${fuelType.toLowerCase()}.`);
    } else {
      console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
    }
  }
}

fuel(["Diesel", "10"]);
fuel(["Gasoline", "40"]);
fuel(["Gas", "25"]);
fuel(["Kerosene", "2000"]);
