function operations(input) {
  let N1 = Number(input[0]);
  let N2 = Number(input[1]);
  let operator = input[2];

  if (N2 === 0 && (operator === "/" || operator === "%")) {
    console.log(`Cannot divide ${N1} by zero`);
  } else {
    let result = 0;
    let evenOdd;
    switch (operator) {
      case "+":
        result = N1 + N2;
        result % 2 == 0 ? (evenOdd = "even") : (evenOdd = "odd");
        break;
      case "-":
        result = N1 - N2;
        result % 2 == 0 ? (evenOdd = "even") : (evenOdd = "odd");
        break;
      case "*":
        result = N1 * N2;
        result % 2 == 0 ? (evenOdd = "even") : (evenOdd = "odd");
        break;
      case "/":
        result = N1 / N2;
        break;
      case "%":
        result = N1 % N2;
        break;
    }
    if (operator === "+" || operator === "-" || operator === "*") {
      console.log(`${N1} ${operator} ${N2} = ${result} - ${evenOdd}`);
    } else if (operator === "/") {
      console.log(`${N1} / ${N2} = ${result.toFixed(2)}`);
    } else {
      console.log(`${N1} % ${N2} = ${result}`);
    }
  }
}

operations(["10", "12", "+"]);
operations(["123", "12", "/"]);
operations(["112", "0", "/"]);
operations(["10", "1", "-"]);
operations(["10", "0", "%"]);
operations(["10", "0", "*"]);
operations(["7", "3", "*"]);
