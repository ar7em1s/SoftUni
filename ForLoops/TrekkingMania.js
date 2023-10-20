function trekking(input) {
  let groups = Number(input[0]);

  let musala = 0;
  let monblanc = 0;
  let kili = 0;
  let k2 = 0;
  let everest = 0;
  let peopleSum = 0;

  for (i = 1; i <= groups; i++) {
    peopleSum += Number(input[i]);
    if (Number(input[i]) <= 5) {
      musala += Number(input[i]);
    } else if (Number(input[i]) > 5 && Number(input[i]) <= 12) {
      monblanc += Number(input[i]);
    } else if (Number(input[i]) > 12 && Number(input[i]) <= 25) {
      kili += Number(input[i]);
    } else if (Number(input[i]) > 25 && Number(input[i]) <= 40) {
      k2 += Number(input[i]);
    } else if (Number(input[i]) > 40) {
      everest += Number(input[i]);
    }
  }
  console.log(((musala / peopleSum) * 100).toFixed(2) + "%");
  console.log(((monblanc / peopleSum) * 100).toFixed(2) + "%");
  console.log(((kili / peopleSum) * 100).toFixed(2) + "%");
  console.log(((k2 / peopleSum) * 100).toFixed(2) + "%");
  console.log(((everest / peopleSum) * 100).toFixed(2) + "%");
}
trekking(["5", "25", "41", "31", "250", "6"]);
