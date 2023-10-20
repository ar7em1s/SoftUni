function wine(input) {
  let xGrapes = Number(input[0]);
  let yGrapes = Number(input[1]);
  let wineNeeded = Number(input[2]);
  let workers = Number(input[3]);

  let allHarvest = yGrapes * xGrapes;
  let wineHarvest = Math.ceil((allHarvest * 0.4) / 2.5);
  let diff = Math.floor(Math.abs(wineHarvest - wineNeeded));

  if (wineHarvest >= wineNeeded) {
    let winePerWorker = Math.ceil(diff / workers);
    console.log(`Good harvest this year! Total wine: ${wineHarvest} liters. `);
    console.log(`${diff} liters left -> ${winePerWorker} liters per person. `);
  } else {
    console.log(`It will be a tough winter! More ${diff} liters wine needed.`);
  }
}
wine(["650", "2", "175", "3"]); // “Good harvest this year! Total wine: 208 liters. 33 liters left -> 11 liters per person.”
wine(["1020", "1.5", "425", "4"]); // "It will be a tough winter! More 180 liters wine needed."
