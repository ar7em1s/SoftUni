function greaterNumber(input) {
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);
  // return num1 > num2 ? num1 : num2;
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}

/*console.log*/ greaterNumber(["5", "3"]);
