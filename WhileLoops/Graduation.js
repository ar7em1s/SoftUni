function graduation(params) {
  let name = params[0];
  let index = 1;
  let currGrade = Number(params[index]);

  let gradesSum = 0;
  let failed = 0;

  while (index <= 12) {
    if (currGrade < 4) {
      failed++;
    }
    if (failed > 1) {
      console.log(`${name} has been excluded at ${index - 1} grade`);
      break;
    }

    gradesSum += currGrade;
    index++;
    currGrade = Number(params[index]);
  }
  if (failed < 2) {
    console.log(`${name} graduated. Average grade: ${(gradesSum / 12).toFixed(2)}`);
  }
}

graduation(["Gosho", "6", "5", "6", "5", "5.5", "6", "5.55", "2", "3", "6", "5.43", "5"]);
console.log("---------");
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3", "5", "6", "5"]);
