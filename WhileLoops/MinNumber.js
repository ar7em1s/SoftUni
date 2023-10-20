function min(nums) {
  let index = 0;
  let currNum = nums[index];
  let minNum = Number.MAX_SAFE_INTEGER;

  while (currNum !== "Stop") {
    currNum = Number(nums[index]);
    if (currNum < minNum) {
      minNum = currNum;
    }
    index++;
    currNum = nums[index];
  }
  console.log(minNum);
}
min(["100", "99", "80", "70", "Stop"]);
console.log("------------");
min(["-10", "20", "-30", "Stop"]);
console.log("------------");
min(["45", "-20", "7", "99", "Stop"]);
console.log("------------");
min(["999", "Stop"]);
console.log("------------");
min(["-1", "-2", "Stop"]);
