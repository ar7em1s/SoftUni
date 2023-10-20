function oscar(input) {
  let nominee = input[0];
  let academyPoints = Number(input[1]);
  let judgeCount = Number(input[2]);

  let index = 3;

  let accPoints = 0;
  for (let i = 3; i < input.length; i += 2) {
    let judgeName = input[i];
    let judgePoints = Number(input[i + 1]);

    let pointsWon = (judgeName.length * judgePoints) / 2;
    academyPoints += pointsWon;

    if (academyPoints > 1250.5) {
      console.log(`Congratulations, ${nominee} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
      break;
    }
  }
  if (academyPoints <= 1250.5) {
    let pointsNeeded = 1250.5 - academyPoints;
    console.log(`Sorry, ${nominee} you need ${pointsNeeded.toFixed(1)} more!`);
  }
}

oscar(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);
console.log("----------");
oscar(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);
