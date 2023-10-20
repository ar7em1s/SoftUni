function flowers(input) {
  let magnolias = Number(input[0]);
  let hyacinths = Number(input[1]);
  let roses = Number(input[2]);
  let cacti = Number(input[3]);
  let giftPrice = Number(input[4]);

  let magnoliasPrice = magnolias * 3.25;
  let hyacinthsPrice = hyacinths * 4;
  let rosesPrice = roses * 3.5;
  let cactiPrice = cacti * 8;

  let flowersSum = magnoliasPrice + hyacinthsPrice + rosesPrice + cactiPrice;
  let tax = flowersSum * 0.05;
  let diff = Math.abs(flowersSum - giftPrice - tax);

  if (flowersSum >= giftPrice) {
    console.log(`She is left with ${Math.floor(diff)} leva.`);
  } else {
    console.log(`She will have to borrow ${Math.ceil(diff)} leva.`);
  }
}

flowers(["2", "3", "5", "1", "50"]); //She will have to borrow 9 leva.
flowers(["15", "7", "5", "10", "100"]); //She is left with 65 leva.
