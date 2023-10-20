function special(num) {
  for (let i = 1; i <= num; i++) {
    let n = i % 10;
    let sum = n;

    if (i > 10) {
      let remainingDigits = parseInt(i / 10);
      sum += remainingDigits % 10;
    }

    if (sum === 5 || sum === 7 || sum === 11) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
}

special(15);
console.log("----------");
special(20);
