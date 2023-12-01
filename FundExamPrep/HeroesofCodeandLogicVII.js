function game(input) {
  // parse input
  // store heto data
  let n = input.shift();
  let party = {};

  for (let i = 0; i < n; i++) {
    let heroData = input.shift();
    let [name, HP, MP] = heroData.split(" ");

    let hero = {
      HP: Number(HP),
      MP: Number(MP),
    };
    party[name] = hero;
  }

  // for eahc line until 'End':
  while (input[0] != "End") {
    // - check command and execute
    // print result
    let line = input.shift();
    let tokens = line.split(" - ");
    let command = tokens[0];
    let name = tokens[1];
    let hero = party[name];

    switch (command) {
      case "Heal":
        //heal
        // - check how much health can be restored
        // - add HP to hero stats
        // - print result of the heal
        let HPtoRestore = Number(tokens[2]);
        if (HPtoRestore + hero.HP > 100) {
          HPtoRestore = 100 - hero.HP;
        }
        hero.HP += HPtoRestore;
        console.log(`${name} healed for ${HPtoRestore} HP!`);
        break;
      case "Recharge":
        //recharge
        // - check how much mana can be restored
        // - add MP to hero stats
        // - print result of the recharge
        let MPtoRestore = Number(tokens[2]);
        if (MPtoRestore + hero.MP > 200) {
          MPtoRestore = 200 - hero.MP;
        }
        hero.MP += MPtoRestore;
        console.log(`${name} recharged for ${MPtoRestore} MP!`);
        break;
      case "CastSpell":
        //cast spell
        // - check if hero has enough mana
        // -- if yes, cast spell, substract MP and print result
        // -- otherwise, print error message
        let MPCost = Number(tokens[2]);
        let spellName = tokens[3];
        if (hero.MP >= MPCost) {
          hero.MP -= MPCost;
          console.log(`${name} has successfully cast ${spellName} and now has ${hero.MP} MP!`);
        } else {
          console.log(`${name} does not have enough MP to cast ${spellName}!`);
        }
        break;
      case "TakeDamage":
        //take damage
        // subtract damage from hero HP
        // check if hero is still alive
        // - if yes, print damage message
        // - if no, print death message and remove hero from the party
        break;
    }
  }
}

game(["2", "Solmyr 85 120", "Kyrre 99 50", "Heal - Solmyr - 10", "Recharge - Solmyr - 50", "TakeDamage - Kyrre - 66 - Orc", "CastSpell - Kyrre - 15 - ViewEarth", "End"]);
console.log("----------");
game(["4", "Adela 90 150", "SirMullich 70 40", "Ivor 1 111", "Tyris 94 61", "Recharge - Adela - 100", "CastSpell - Tyris - 1000 - Fireball", "TakeDamage - Tyris - 99 - Fireball", "TakeDamage - Ivor - 3 - Mosquito", "End"]);
