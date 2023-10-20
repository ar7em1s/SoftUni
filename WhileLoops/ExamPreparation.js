function exam(grade) {
  let badGradesNeeded = Number(grade[0]);

  let indexE = 1; // oscars exersize, indes ++ 2 !!!
  let indexG = 2;
  let exersizeE = grade[indexE];
  let exersizeG = Number(grade[indexG]);

  let accBadGrades = 0;
  let accGoodGrades = 0;
  let gradesSum = 0;
  let lastExercise = "";

  while (lastExercise !== "Enough") {
    if (exersizeG <= 4) {
      accBadGrades++;
      gradesSum += exersizeG;
      lastExercise = grade[indexE];
      indexE += 2;
      indexG += 2;
      exersizeG = Number(grade[indexG]);
      exersizeE = grade[indexE];
    }
    if (accBadGrades == badGradesNeeded) {
      console.log(`You need a break, ${accBadGrades} poor grades.`);
    }
    if (exersizeG > 4) {
      accGoodGrades++;
      gradesSum += exersizeG;
      lastExercise = grade[indexE];
      indexE += 2;
      indexG += 2;
      exersizeG = Number(grade[indexG]);
      exersizeE = grade[indexE];
    }
  }
  if (accBadGrades < badGradesNeeded) {
    console.log(`Average score: ${(gradesSum / accGoodGrades).toFixed(2)}`);
    console.log(`Number of problems: ${accGoodGrades}`);
    console.log(`Last problem: ${lastExercise}`);
  }
}
exam(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
exam(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
