function num(input) {
  let integer = Number(input[0]);

  if (integer >= -100 && integer <= 100 && integer != 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

num(["-25"]);
num(["0"]);
num(["25"]);
