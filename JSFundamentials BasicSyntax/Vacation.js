function vacation(group, type, day) {
  let price = 0;
  switch (type) {
    case "Students":
      if (day == "Friday") {
        price = group * 8.45;
        if (group >= 30) {
          price -= price * 0.15;
        }
      } else if (day == "Saturday") {
        price = group * 9.8;
        if (group >= 30) {
          price -= price * 0.15;
        }
      } else if (day == "Sunday") {
        price = group * 10.46;
        if (group >= 30) {
          price -= price * 0.15;
        }
      }
      break;
    case "Business":
      if (day == "Friday") {
        price = group * 10.9;
        if (group >= 100) {
          price = (group - 10) * 10.9;
        }
      } else if (day == "Saturday") {
        price = group * 15.6;
        if (group >= 100) {
          price = (group - 10) * 15.6;
        }
      } else if (day == "Sunday") {
        price = group * 16;
        if (group >= 100) {
          price = (group - 10) * 16;
        }
      }
      break;
    case "Regular":
      if (day == "Friday") {
        price = group * 15;
        if (group >= 10 && group <= 20) {
          price -= price * 0.05;
        }
      } else if (day == "Saturday") {
        price = group * 20;
        if (group >= 10 && group <= 20) {
          price -= price * 0.05;
        }
      } else if (day == "Sunday") {
        price = group * 22.5;
        if (group >= 10 && group <= 20) {
          price -= price * 0.05;
        }
      }
      break;
    default:
      break;
  }
  console.log(`Total price: ${price.toFixed(2)}`);
}

//vacation(30, "Students", "Sunday");
//vacation(40, "Regular", "Saturday");
vacation(15, "Regular", "Saturday");
