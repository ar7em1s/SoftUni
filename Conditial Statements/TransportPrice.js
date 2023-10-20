function transport(input) {
  let nKm = Number(input[0]);
  let time = input[1];

  let rate = 0;
  if (time === "day" && nKm < 20) {
    rate = 0.7 + nKm * 0.79;
  } else if (time === "day" && nKm >= 20 && nKm < 100) {
    // You cannot use the expression 20 <= nKm < 100 to check if nKm is within that range in JavaScript.
    rate = nKm * 0.09;
  } else if (time === "day" && nKm >= 100) {
    rate = nKm * 0.06;
  } else if (time === "night" && nKm < 20) {
    rate = 0.7 + nKm * 0.9;
  } else if (time === "night" && nKm >= 20 && nKm < 100) {
    // You cannot use the expression 20 <= nKm < 100 to check if nKm is within that range in JavaScript.
    rate = nKm * 0.09;
  } else if (time === "night" && nKm >= 100) {
    rate = nKm * 0.06;
  }

  console.log(rate.toFixed(2));
}

transport(["5", "day"]); // 4.65
transport(["7", "night"]); // 7.00
transport(["25", "day"]); // 2.25
transport(["180", "night"]); // 10.80
