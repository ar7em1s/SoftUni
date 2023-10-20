function tennis(input) {
  let matches = Number(input[0]);
  let points = Number(input[1]);

  let accPoints = 0;
  let winMatches = 0;
  for (i = 2; i <= matches + 1; i++) {
    if (input[i] == "W") {
      accPoints += 2000;
      winMatches += 1;
    } else if (input[i] == "F") {
      accPoints += 1200;
    } else if (input[i] == "SF") {
      accPoints += 720;
    }
  }
  console.log(`Final points: ${accPoints + points}`);
  console.log(`Average points: ${Math.floor(accPoints / matches).toFixed(0)}`);
  console.log(`${((winMatches / matches) * 100).toFixed(2)}%`);
}

tennis([7, 1200, "SF", "F", "W", "F", "W", "SF", "W"]);
