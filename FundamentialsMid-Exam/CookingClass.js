function cooking(arrInput) {
  let budget = Number(arrInput[0]);
  let students = Number(arrInput[1]);
  let flourPrice = Number(arrInput[2]); // 1 package per student
  let singleEgg = Number(arrInput[3]); // 10 eggs per student
  let apronPrice = Number(arrInput[4]); // 1 apron per studen

  let freePackages = Math.floor(students / 5);

  let neededItems = flourPrice * (students - freePackages) + singleEgg * 10 * students +
   apronPrice * (students + Math.ceil(0.2 * students));

  if (neededItems <= budget) {
    console.log(`Items purchased for ${neededItems.toFixed(2)}$.`);
  } else {
    console.log(`${(neededItems - budget).toFixed(2)}$ more needed.`);
  }
}

cooking(["50", "2", "1.0", "0.1", "10.0"]);
console.log("-------");
cooking(["100", "25", "4.0", "1.0", "6.0"]);
console.log("-------");
cooking(["946", "20", "12.05", "0.42", "27.89"]);
