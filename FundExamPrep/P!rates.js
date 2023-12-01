/* let targets = {
    'Tortuga': {population: 345000, gold: 1250}
    'Santo Domingo': {population: 240000, gold: 630}
    'Havana': {population: 410000, gold: 1100}
} */
function pirates(input) {
  let targets = {};
  let command = input.shift();

  while (command != "Sail") {
    let [city, population, gold] = command.split("||"); //destructuring
    population = Number(population);
    gold = Number(gold);

    if (city in targets) {
      //if the target exists in the object
      //accessing the outer object to modify its properties
      targets[city].population += population;
      targets[city].gold += gold;
    } else {
      //adding new targets
      targets[city] = { population, gold };
    }
    command = input.shift();
  }
  command = input.shift(); //signaling the end of the first 'while' loop !!!

  while (command != "End") {
    let tokens = command.split("=>");
    let action = tokens.shift();

    if (action == "Plunder") {
      let [city, people, gold] = tokens;
      people = Number(people);
      gold = Number(gold);

      targets[city].population -= people;
      targets[city].gold -= gold;

      console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);

      if (targets[city].population <= 0 || targets[city].gold <= 0) {
        console.log(`${city} has been wiped off the map!`);
        delete targets[city];
      }
    } else {
      let [city, gold] = tokens;
      gold = Number(gold);

      if (gold < 0) {
        console.log("Gold added cannot be a negative number!");
        command = input.shift(); //always shift the command before 'continue'
        continue;
      }
      targets[city].gold += gold;
      console.log(`${gold} gold added to the city treasury. ${city} now has ${targets[city].gold} gold.`);
    }
    command = input.shift();
  }
  let entries = Object.entries(targets);

  if (entries.length == 0) {
    console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
  } else {
    console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`);
    entries.forEach(([city, stats]) => console.log(`${city} -> Population: ${stats.population} citizens, Gold: ${stats.gold} kg`));
  }
}

pirates(["Tortuga||345000||1250", "Santo Domingo||240000||630", "Havana||410000||1100", "Sail", "Plunder=>Tortuga=>75000=>380", "Prosper=>Santo Domingo=>180", "End"]);
//console.log("-------------");
//pirates(["Nassau||95000||1000", "San Juan||930000||1250", "Campeche||270000||690", "Port Royal||320000||1000", "Port Royal||100000||2000", "Sail", "Prosper=>Port Royal=>-200", "Plunder=>Nassau=>94000=>750", "Plunder=>Nassau=>1000=>150", "Plunder=>Campeche=>150000=>690", "End"]);
