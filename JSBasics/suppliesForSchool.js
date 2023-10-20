function schoolSupplies(input) {
  let markers = Number(input[0]) * 5.8;
  let pens = Number(input[1]) * 7.2;
  let cleaningLiquid = Number(input[2]) * 1.2;
  let percentDiscount = Number(input[3]) / 100;
  let sum = markers + pens + cleaningLiquid;
  let endSum = sum - sum * percentDiscount;
  console.log(endSum);
}

schoolSupplies(["2 ", "3 ", "4 ", "25 "]);
