function day(input) {
  let day = input[0];
  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      console.log("Working day");
      break;
    case "Saturday":
    case "Sunday":
      console.log("Weekend");
      break;
    default:
      console.log("Error");
  }
}

day(["Monday"]);
day(["Thursday"]);
day(["Saturday"]);
day(["Sunday"]);
day(["April"]);
day(["John"]);
