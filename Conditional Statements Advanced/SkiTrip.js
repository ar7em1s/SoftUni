function ski(input) {
  let days = Number(input[0]);
  let roomType = input[1];
  let rate = input[2];

  let price = 0;
  switch (roomType) {
    case "room for one person":
      if (days < 10) {
        price = (days - 1) * 18;
      } else if (days >= 10 && days <= 15) {
        price = (days - 1) * 18;
      } else if (days > 15) {
        price = (days - 1) * 18;
      }
      break;
    case "apartment":
      if (days < 10) {
        price = (days - 1) * 25;
        price -= price * 0.3;
      } else if (days >= 10 && days <= 15) {
        price = (days - 1) * 25;
        price -= price * 0.35;
      } else if (days > 15) {
        price = (days - 1) * 25;
        price -= price * 0.5;
      }
      break;
    case "president apartment":
      if (days < 10) {
        price = (days - 1) * 35;
        price -= price * 0.1;
      } else if (days >= 10 && days <= 15) {
        price = (days - 1) * 35;
        price -= price * 0.15;
      } else if (days > 15) {
        price = (days - 1) * 35;
        price -= price * 0.2;
      }
      break;
  }
  if (rate == "positive") {
    price += price * 0.25;
  } else {
    price -= price * 0.1;
  }
  console.log(price.toFixed(2));
}

ski(["14", "apartment", "positive"]);
ski(["30", "president apartment", "negative"]);
ski(["12", "room for one person", "positive"]);
ski(["2", "apartment", "positive"]);
