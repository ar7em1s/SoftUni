function outfit(input) {
  let celcius = Number(input[0]);
  let timeOfDay = input[1];

  let clothes;
  let shoes;
  switch (timeOfDay) {
    case "Morning":
      if (celcius >= 10 && celcius <= 18) {
        clothes = "Sweatshirt";
        shoes = "Sneakers";
      } else if (celcius > 18 && celcius <= 24) {
        clothes = "Shirt";
        shoes = "Moccasins";
      } else if (celcius >= 25) {
        clothes = "T-Shirt";
        shoes = "Sandals";
      }
      break;
    case "Afternoon":
      if (celcius >= 10 && celcius <= 18) {
        clothes = "Shirt";
        shoes = "Moccasins";
      } else if (celcius > 18 && celcius <= 24) {
        clothes = "T-Shirt";
        shoes = "Sandals";
      } else if (celcius >= 25) {
        clothes = "Swim Suit";
        shoes = "Barefoot";
      }
      break;
    case "Evening":
      if (celcius >= 10 && celcius <= 18) {
        clothes = "Shirt";
        shoes = "Moccasins";
      } else if (celcius > 18 && celcius <= 24) {
        clothes = "Shirt";
        shoes = "Moccasins";
      } else if (celcius >= 25) {
        clothes = "Shirt";
        shoes = "Moccasins";
      }
      break;
  }
  console.log(`It's ${celcius} degrees, get your ${clothes} and ${shoes}.`);
}

outfit(["16", "Morning"]);
outfit(["22", "Afternoon"]);
outfit(["28", "Evening"]);
