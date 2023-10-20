function newHome(input) {
  let flowers = input[0];
  let flowerCount = Number(input[1]);
  let budget = Number(input[2]);

  let sum = 0;
  switch (flowers) {
    case "Roses":
      sum = flowerCount * 5;
      if (flowerCount > 80) {
        sum -= sum * 0.1;
      }
      break;
    case "Dahlias":
      sum = flowerCount * 3.8;
      if (flowerCount > 90) {
        sum -= sum * 0.15;
      }
      break;
    case "Tulips":
      sum = flowerCount * 2.8;
      if (flowerCount > 80) {
        sum -= sum * 0.15;
      }
      break;
    case "Narcissus":
      sum = flowerCount * 3;
      if (flowerCount < 120) {
        sum += sum * 0.15;
      }
      break;
    case "Gladiolus":
      sum = flowerCount * 2.5;
      if (flowerCount < 80) {
        sum += sum * 0.2;
      }
      break;
  }
  if (sum <= budget) {
    console.log(`Hey, you have a great garden with ${flowerCount} ${flowers} and ${Math.abs(sum - budget).toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money, you need ${Math.abs(sum - budget).toFixed(2)} leva more.`);
  }
}

/*newHome(["Roses", "55", "250"]);
newHome(["Tulips", "88", "260"]);
newHome(["Narcissus", "119", "360"]);*/
newHome(["Gladiolus", "64", "160"]);
