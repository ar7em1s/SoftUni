function count(n) {
  let nString = Number(n[0]);
  for (let i = nString; i > 0; i--) {
    console.log(i);
  }
}
count(["2"]);
console.log("----");
count(["3"]);
console.log("----");
count(["5"]);
