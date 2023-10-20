function evenOrOdd(input) {
  let inNumber = Number(input[0]);
  return inNumber % 2 == 0 ? "even" : "odd";
  /*if (inNumber % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }*/
}

console.log(evenOrOdd(["3"]));
