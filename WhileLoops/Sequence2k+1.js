function seq(num) {
  let max = Number(num[0]);
  let start = 1;

  while (start <= max) {
    console.log(start);
    let next = start * 2 + 1;
    start = next;
  }
}

seq(["3"]);
console.log("-------");
seq(["8"]);
console.log("-------");
seq(["17"]);
console.log("-------");
seq(["31"]);
