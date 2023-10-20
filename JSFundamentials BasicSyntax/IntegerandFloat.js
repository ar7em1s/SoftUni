function intFloat(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  sum % 1 === 0 ? (sum += " - Integer") : (sum += " - Float");
  console.log(sum);
}

intFloat(9, 100, 1.1);
intFloat(100, 200, 303);
