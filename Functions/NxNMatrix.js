// doesn't work for double digits numebrs
function NxN(num) {
  let n = num.toString().repeat(num).split("").join(" ");
  for (let i = 0; i < num; i++) {
    console.log(`${n}`);
  }
}

NxN(13);
console.log("---------");
NxN(7);
console.log("---------");
NxN(2);
