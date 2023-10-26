function spaceTravel(roadMap) {
  let travelSeq = roadMap[0].split("||"); // first arr
  let travelPart = travelSeq[0].split(" "); // part of the journey
  let command = travelPart.shift(); // Titan
  let i = 0;
  let fuel = roadMap[1];
  let ammo = roadMap[2];

  // console.log(travelSeq);
  // console.log(travelPart); // type + number
  // console.log(command); // type of journey

  while (command != "Titan") {
    if (command == "Travel") {
      fuel -= Number(travelPart);
      console.log(`The spaceship travelled ${travelPart} light-years.`);
      if (fuel <= 0) {
        console.log("Mission failed!");
        return;
      }
    }

    if (command == "Enemy") {
      if (ammo >= Number(travelPart)) {
        ammo -= Number(travelPart);
        console.log(`An enemy with ${travelPart} armour is defeated.`);
      } else {
        if (fuel < travelPart) {
          console.log("Mission failed.");
          return;
        }
        fuel -= Number(travelPart) * 2;
        console.log(`An enemy with ${travelPart} armour is outmaneuvered.`);
      }
    }

    if (command == "Repair") {
      fuel += Number(travelPart);
      ammo += Number(travelPart) * 2;
      console.log(`Ammunitions added: ${travelPart * 2}.`);
      console.log(`Fuel added: ${travelPart}.`);
    }

    i++;
    command = travelSeq[i].split(" ").shift();
    travelPart = travelSeq[i].split(" ").pop();
  }
  console.log(`You have reached Titan, all passengers are safe.`);
}

spaceTravel(["Travel 10||Enemy 30||Repair 15||Titan", "50", "80"]);
console.log("-----------");
spaceTravel(["Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan", "60", "100"]);
console.log("-----------");
