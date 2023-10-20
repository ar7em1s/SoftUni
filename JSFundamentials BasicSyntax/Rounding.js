function rounding(num, round) {
  if (round > 15) {
    round = 15;
  }

  let fixedNum = num.toFixed(round);
  console.log(parseFloat(fixedNum));
}

rounding(3.1415926535897932384626433832795, 2);
rounding(10.5, 3);
