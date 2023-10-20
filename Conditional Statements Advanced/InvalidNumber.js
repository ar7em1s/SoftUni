function invalidNumber(input) {
  let integer = Number(input[0]);

  if ((integer >= 100 && integer <= 200) || integer == 0) {
    console.log();
  } else {
    console.log("invalid");
  }
}

invalidNumber(["75"]);
invalidNumber(["150"]);
invalidNumber(["220"]);
invalidNumber(["199"]);
invalidNumber(["-1"]);
invalidNumber(["100"]);
invalidNumber(["200"]);
invalidNumber(["-50"]);
invalidNumber(["0"]);
