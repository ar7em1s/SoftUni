function printsum(num1, num2) {
  let sum = 0;
  let result = "";
  for (i = num1; i <= num2; i++) {
    result += i + " "; //console.log(i + " ");
    sum += i;
  }
  console.log(result);
  console.log(`Sum: ${sum}`);
}

printsum(5, 10);
console.log("------");
printsum(0, 26);
console.log("------");
printsum(50, 60);
