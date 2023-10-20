function workingTime(input) {
  let hour = Number(input[0]);
  let day = input[1];

  if (hour >= 10 && hour < 18) {
    switch (day) {
      case "Monday":
      case "Tuesday":
      case "Wednesday":
      case "Thursday":
      case "Friday":
      case "Saturday":
        console.log("open");
        break;
      case "Sunday":
        console.log("closed");
        break;
    }
  } else {
    console.log("closed");
  }
}

workingTime(["11", "Monday"]);
workingTime(["19", "Friday"]);
workingTime(["11", "Sunday"]);
