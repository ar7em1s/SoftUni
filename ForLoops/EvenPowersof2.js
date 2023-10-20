function count(n) {
  let num = Number(n[0]);

  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(2 ** i);
    }
  }
}
count(["3"]);
console.log("----");
count(["4"]);
console.log("----");
count(["6"]);
console.log("----");
count(["7"]);
