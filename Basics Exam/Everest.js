function everest(params) {
  let idx = 0;
  let command = params[idx];

  let distanceToPeak = 5364;
  let dayCount = 1;
  while (command != "END") {
    if (command == "Yes") {
      dayCount++;
      idx++;
    } else if (command == "No") {
      idx++;
    }
    distanceToPeak += Number(params[idx]);
    if (distanceToPeak >= 8848 && dayCount <= 5) {
      console.log(`Goal reached for ${dayCount} days!`);
      console.log(`${distanceToPeak}`);
      break;
    } else if (dayCount >= 5) {
      console.log(`Failed!`);
      console.log(`${distanceToPeak}`);
      break;
    }

    idx++;
    command = params[idx];
  }
  if (distanceToPeak < 8848 && dayCount < 5) {
    console.log(`Failed!`);
    console.log(`${distanceToPeak}`);
  }
}

everest(["Yes", "1000", "Yes", "350", "Yes", "120", "Yes", "130", "Yes", "350"]);
everest(["No", "700", "END"]);
everest(["No", "1254", "No", "1402", "Yes", "250", "END", "No", "635"]);
