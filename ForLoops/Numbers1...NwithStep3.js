function count(n) {
  let nString = Number(n[0]);

  for (i = 1; i <= nString; i += 3) {
    console.log(i);
  }
}
count(["10"]);
console.log("----");
count(["7"]);
console.log("----");
count(["15"]);
