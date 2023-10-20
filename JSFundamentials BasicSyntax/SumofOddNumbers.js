/* function sumOdd(n) {
  let oddNum = 0;
  for (let i = 0; i <= n * 2; i++) {
    if (i % 2 != 0) {
      console.log(i);
      oddNum += i;
    }
  }
  console.log(`Sum: ${oddNum}`);
}
sumOdd(3); */

function oddcount(n) {
  let oddSum = 0;
  for (let i = 1; n != 0; i++) {
    if (i % 2 != 0) {
      console.log(i);
      oddSum += i;
      n--;
    }
  }
  console.log(`Sum: ${oddSum}`);
}
oddcount(5);
