function balance(input) {
  let index = 0;
  let money = Number(input[index]);
  let moneySum = 0;

  while (money !== "NoMoreMoney") {
    if (money < 0) {
      console.log("Invalid operation!");
      break;
    }
    money = Number(input[index]);
    console.log(`Increase: ${money.toFixed(2)}`);
    moneySum += money;
    index++;
    money = input[index];
  }
  console.log(`Total: ${moneySum.toFixed(2)}`);
}

balance(["5.51", "69.42", "100", "NoMoreMoney"]);
balance(["120", "45.55", "-150"]);
