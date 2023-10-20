function christmas(params) {
  let wrapPaper = params[0];
  let fabricRoll = params[1];
  let glueLiters = params[2];
  let percentDiscount = params[3] / 100; // 0.25

  let allMoney = wrapPaper * 5.8 + fabricRoll * 7.2 + glueLiters * 1.2;
  let result = allMoney - allMoney * percentDiscount;

  console.log(result.toFixed(3));
}

christmas(["2", "3", "2.5", "25"]);
console.log("-------");
christmas(["4", "2", "5", "13"]);
