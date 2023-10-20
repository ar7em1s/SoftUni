function maidenParty(params) {
  let partyCost = Number(params[0]);
  let loveLetters = Number(params[1]);
  let waxRoses = Number(params[2]);
  let keyCharms = Number(params[3]);
  let caricatures = Number(params[4]);
  let paperCharms = Number(params[5]);

  let count = loveLetters + waxRoses + keyCharms + caricatures + paperCharms;
  let currCost = loveLetters * 0.6 + waxRoses * 7.2 + keyCharms * 3.6 + caricatures * 18.2 + paperCharms * 22;

  if (count >= 25) {
    currCost -= currCost * 0.35;
  }

  let hostingCost = currCost * 0.1;
  let endCost = currCost - hostingCost;
  let diff = Math.abs(partyCost - endCost);

  if (partyCost <= endCost) {
    console.log(`Yes! ${diff.toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
  }
}

maidenParty(["40.8", "20", "25", "30", "50", "10"]);
console.log("-------");
maidenParty(["320", "8", "2", "5", "5", "1"]);
