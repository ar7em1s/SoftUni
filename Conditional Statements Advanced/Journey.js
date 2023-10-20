function vacation(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let payments = 0;
  let destination;
  let restType;
  if (budget <= 100) {
    switch (season) {
      case "summer":
        payments = budget * 0.3;
        destination = "Bulgaria";
        restType = "Camp";
        break;
      case "winter":
        payments = budget * 0.7;
        destination = "Bulgaria";
        restType = "Hotel";
        break;
    }
  } else if (budget >= 101 && budget <= 1000) {
    switch (season) {
      case "summer":
        payments = budget * 0.4;
        destination = "Balkans";
        restType = "Camp";
        break;
      case "winter":
        payments = budget * 0.8;
        destination = "Balkans";
        restType = "Hotel";
        break;
    }
  } else if (budget >= 1000) {
    switch (season) {
      case "summer":
      case "winter":
        payments = budget * 0.9;
        destination = "Europe";
        restType = "Hotel";
        break;
    }
  }
  console.log(`Somewhere in ${destination}`);
  console.log(`${restType} - ${Math.abs(payments).toFixed(2)}`);
}

vacation(["50", "summer"]);
vacation(["75", "winter"]);
vacation(["312", "summer"]);
vacation(["678.53", "winter"]);
vacation(["1500", "summer"]);
