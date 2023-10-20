function sum(nums) {
  let goalSum = Number(nums[0]);
  let numSum = 0;
  let index = 1;
  let currNum = nums[index];

  while (goalSum > numSum) {
    numSum += Number(currNum);
    index++;
    currNum = nums[index];
  }
  console.log(numSum);
}

sum(["100", "10", "20", "30", "40"]);
sum(["20", "1", "2", "3", "4", "5", "6"]);
