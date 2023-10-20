function lily(input) {
  let age = Number(input[0]);
  let price = Number(input[1]);
  let soldToy = Number(input[2]);

  let accMoney = 0;
  let accToys = 0;
  let x = 1;
  for (i = 1; i <= age; i++) {
    if (i % 2 == 0) {
      accMoney += 10 * x - 1;
      x++;
    } else if (i % 2 != 0) {
      accToys += 1;
    }
  }

  let lilyBudget = accMoney + accToys * soldToy;
  if (lilyBudget >= price) {
    console.log(`Yes! ${Math.abs(lilyBudget - price).toFixed(2)}`);
  } else console.log(`No! ${Math.abs(lilyBudget - price).toFixed(2)} `);
}
lily(["10", "170.00", "6"]);
console.log("-----");
lily(["21", "1570.98", "3"]);
