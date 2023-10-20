function fruiShop(input) {
  let fruit = input[0];
  let day = input[1];
  let qty = Number(input[2]);

  let price = 0;
  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      if (fruit == "banana") {
        price = 2.5;
      } else if (fruit == "apple") {
        price = 1.2;
      } else if (fruit == "orange") {
        price = 0.85;
      } else if (fruit == "grapefruit") {
        price = 1.45;
      } else if (fruit == "kiwi") {
        price = 2.7;
      } else if (fruit == "pineapple") {
        price = 5.5;
      } else if (fruit == "grapes") {
        price = 3.85;
      } else {
        console.log("error");
      }
      break;
    case "Saturday":
    case "Sunday":
      if (fruit == "banana") {
        price = 2.7;
      } else if (fruit == "apple") {
        price = 1.25;
      } else if (fruit == "orange") {
        price = 0.9;
      } else if (fruit == "grapefruit") {
        price = 1.6;
      } else if (fruit == "kiwi") {
        price = 3.0;
      } else if (fruit == "pineapple") {
        price = 5.6;
      } else if (fruit == "grapes") {
        price = 4.2;
      } else {
        console.log("error");
      }
      break;
    default:
      console.log("error");
  }
  if (price != 0) {
    console.log((price * qty).toFixed(2));
  }
}

fruiShop(["apple", "Tuesday", "2"]);
fruiShop(["orange", "Sunday", "3"]);
fruiShop(["kiwi", "Monday", "2.5"]);
fruiShop(["grapes", "Saturday", "0.5"]);
fruiShop(["tomato", "Monday", "0.5"]);
