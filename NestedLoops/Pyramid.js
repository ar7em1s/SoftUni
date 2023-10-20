function pyramid(num) {
  let n = Number(num[0]);
  let currentNumber = 1;
  let currLine = "";
  let isBigger = false;

  for (let rows = 1; rows <= n; rows++) {
    for (let cols = 1; cols <= rows; cols++) {
      if (currentNumber > true) {
        break;
      }
      currLine += currentNumber + " ";
      currentNumber++;
    }
    console.log(currentNumber);
    currLine = "";
    if (isBigger) {
      break;
    }
  }
}

pyramid(["7"]);
console.log("-----------");
pyramid(["12"]);
console.log("-----------");
pyramid(["15"]);
