function petFood(input) {
  let days = Number(input[0]);
  let allFood = Number(input[1]);
  let dogPerDay = Number(input[2]);
  let catPerDay = Number(input[3]);
  let turtlePerDay = Number(input[4]) / 1000;

  let dogFood = days * dogPerDay;
  let catFood = days * catPerDay;
  let turtleFood = days * turtlePerDay;
  let foodConsumed = dogFood + catFood + turtleFood;
  let diff = Math.abs(allFood - foodConsumed);

  if (allFood >= foodConsumed) {
    console.log(`${Math.floor(diff)} kilos of food left.`);
  } else {
    console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
  }
}

petFood(["2", "10", "1", "1", "1200"]); // 3 kilos of food left.
petFood(["5", "10", "2.1", "0.8", "321"]); // 7 more kilos of food are needed.
