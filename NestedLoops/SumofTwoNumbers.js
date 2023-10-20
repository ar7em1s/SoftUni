function sumOfTwoNumbers(param) {
  let start = Number(param[0]);
  let end = Number(param[1]);
  let magicNumber = Number(param[2]);

  let numCount = 0;
  let magic = false;
  for (let n1 = start; n1 <= end; n1++) {
    for (let n2 = start; n2 <= end; n2++) {
      numCount++;
      if (n1 + n2 === magicNumber) {
        console.log(`Combination N:${numCount} (${n1} + ${n2} = ${magicNumber})`);
        magic = true;
        return;
      }
    }
  }
  console.log(`${numCount} combinations - neither equals ${magicNumber}`);
}

// sumOfTwoNumbers(["1", "10", "5"]);
// sumOfTwoNumbers(["23", "24", "20"]);
sumOfTwoNumbers(["88", "888", "1000"]);
