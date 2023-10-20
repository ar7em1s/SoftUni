function cinema(params) {
  let index = 0;
  let command = params[index];

  let studentTickets = 0;
  let standardTickets = 0;
  let kidTickets = 0;

  while (command !== "End") {
    // 0 = taxi
    let emptySeats = Number(params[index + 1]); // 1 = 10
    index++; // i = 2
    for (i = index; i <= emptySeats; i++) {
      if (command === "standard") {
        standardTickets += 1;
      } else if (command === "student") {
        studentTickets += 1;
      } else if (command === "kid") {
        kidTickets += 1;
      }
    }
  }
}

cinema(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);
