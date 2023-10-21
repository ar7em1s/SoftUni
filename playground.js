function everest(params) {
  let idx = 0;
  let distanceToPeak = 5364;
  let dayCount = 0;

  while (dayCount < 5 && idx < params.length) {
    if (params[idx] === "Yes") {
      dayCount++;
      distanceToPeak += Number(params[idx + 1]);
      idx += 2;
    } else if (params[idx] === "No") {
      idx++;
    }
  }

  if (distanceToPeak >= 8848 && dayCount <= 5) {
    console.log(`Goal reached for ${dayCount} days!`);
    console.log(`Distance: ${distanceToPeak}`);
  } else {
    console.log(`Failed!`);
    console.log(`Distance: ${distanceToPeak}`);
  }
}

// Test cases
everest(["Yes", "1254", "Yes", "1402", "No", "250", "Yes", "635"]);
everest(["Yes", "1000", "Yes", "945", "No", "1200", "END"]);
everest(["Yes", "535", "Yes", "849", "Yes", "499", "Yes", "400", "Yes", "500"]);
