function boat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let fisherman = Number(input[2]);

  let sum = 0;
  switch (season) {
    case "Spring":
      sum = 3000;
      if (fisherman <= 6) {
        sum -= sum * 0.1;
      } else if (fisherman >= 7 && fisherman <= 11) {
        sum -= sum * 0.15;
      } else {
        sum -= sum * 0.25;
      }
      break;
    case "Summer":
    case "Autumn":
      sum = 4200;
      if (fisherman <= 6) {
        sum -= sum * 0.1;
      } else if (fisherman >= 7 && fisherman <= 11) {
        sum -= sum * 0.15;
      } else {
        sum -= sum * 0.25;
      }
      break;
    case "Winter":
      sum = 2600;
      if (fisherman <= 6) {
        sum -= sum * 0.1;
      } else if (fisherman >= 7 && fisherman <= 11) {
        sum -= sum * 0.15;
      } else {
        sum -= sum * 0.25;
      }
      break;
  }
  if (fisherman % 2 == 0 && season != "Autumn") {
    sum -= sum * 0.05;
  }
  if (budget >= sum) {
    console.log(`Yes! You have ${Math.abs(budget - sum).toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money! You need ${Math.abs(budget - sum).toFixed(2)} leva.`);
  }
}

boat(["3000", "Summer", "11"]);
boat(["3600", "Autumn", "6"]);
boat(["2000", "Winter", "13"]);
