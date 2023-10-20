function max(nums) {
  let index = 0;
  let currNum = nums[index];
  let maxNum = Number.MIN_SAFE_INTEGER;

  while (currNum !== "Stop") {
    currNum = Number(nums[index]);
    if (currNum > maxNum) {
      maxNum = currNum;
    }
    index++;
    currNum = nums[index];
  }
  console.log(maxNum);
}
max(["100", "99", "80", "70", "Stop"]);
console.log("------------");
max(["-10", "20", "-30", "Stop"]);
console.log("------------");
max(["45", "-20", "7", "99", "Stop"]);
console.log("------------");
max(["999", "Stop"]);
console.log("------------");
max(["-1", "-2", "Stop"]);
