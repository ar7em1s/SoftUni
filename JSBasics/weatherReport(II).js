/* 
Напишете програма, която при въведени градуси (реално число) принтира какво е времето, като имате предвид следната таблица:
Градуси	Време
26.00 - 35.00	Hot
20.1 - 25.9	    Warm
15.00 - 20.00	Mild
12.00 - 14.9	Cool
5.00 - 11.9	    Cold
Ако се въведат градуси, различни от посочените в таблицата, да се отпечата "unknown".
*/

function weather(input) {
  let degrees = Number(input[0]);

  if (degrees >= 26 && degrees <= 35) {
    console.log("Hot");
  } else if (degrees >= 20.1 && degrees <= 25.9) {
    console.log("Warm");
  } else if (degrees >= 15 && degrees <= 20.0) {
    console.log("Mild");
  } else if (degrees >= 12 && degrees <= 14.9) {
    console.log("Cool");
  } else if (degrees >= 5 && degrees <= 11.9) {
    console.log("Cold");
  } else {
    console.log("unknown");
  }
}

weather(["16.5"]);
weather(["8"]);
weather(["22.4"]);
weather(["26"]);
weather(["0"]);
