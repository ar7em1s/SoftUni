function cat(input) {
  let freeDays = Number(input[0]);

  let vacationTime = freeDays * 127; //play when owner rests
  let workTime = (365 - freeDays) * 63; //play when owner works
  let tomTime = vacationTime + workTime;
  let tomSleeps = Math.abs(30000 - tomTime);

  let tomHours = Math.floor(tomSleeps / 60);
  let tomMinutes = tomSleeps % 60;

  if (tomTime <= 30000) {
    console.log(
      `Tom sleeps well \n${tomHours} hours and ${tomMinutes} minutes less for play`
    );
  } else {
    console.log(
      `Tom will run away \n${tomHours} hours and ${tomMinutes} minutes more for play`
    );
  }
}

cat(["20"]);
cat(["113"]);
