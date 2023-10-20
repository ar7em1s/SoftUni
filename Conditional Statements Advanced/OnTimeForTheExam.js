function exam(input) {
  let examHour = Number(input[0]);
  let examMinute = Number(input[1]);
  let studentHour = Number(input[2]);
  let studentMinute = Number(input[3]);

  let examInMinutes = examHour * 60 + examMinute;
  let studentInMinutes = studentHour * 60 + studentMinute;
  let diff = Math.abs(examInMinutes - studentInMinutes);

  if (studentInMinutes > examInMinutes) {
    console.log("Late");
    if (diff >= 60 || diff == 60) {
      let hour = Math.floor(diff / 60);
      let minutes = diff % 60;
      if (minutes >= 10) {
        console.log(`${hour}:${minutes} hours after the start`);
      } else {
        console.log(`${hour}:0${minutes} hours after the start`);
      }
    } else {
      console.log(`${diff} minutes after the start`);
    }
  } else if (studentInMinutes < examInMinutes) {
    if (diff <= 30) {
      console.log("On time");
      console.log(`${diff} minutes before the start`);
    } else if (diff >= 60 || diff == 60) {
      console.log("Early");
      let hour = Math.floor(diff / 60);
      let minutes = diff % 60;
      if (minutes >= 10) {
        console.log(`${hour}:${minutes} hours before the start`);
      } else {
        console.log(`${hour}:0${minutes} hours before the start`);
      }
    } else {
      console.log("Early");
      console.log(`${diff} minutes before the start`);
    }
  } else {
    console.log("On time");
  }
}

exam(["9", "30", "9", "50"]);
console.log("---------------");
exam(["9", "00", "8", "30"]);
console.log("---------------");
exam(["16", "00", "15", "00"]);
console.log("---------------");
exam(["9", "00", "10", "30"]);
console.log("---------------");
exam(["14", "00", "13", "55"]);
console.log("---------------");
exam(["11", "30", "8", "12"]);
console.log("---------------");
exam(["10", "00", "10", "00"]);
console.log("---------------");
exam(["11", "30", "10", "55"]);
console.log("---------------");
exam(["11", "30", "12", "29"]);
console.log("---------------");
