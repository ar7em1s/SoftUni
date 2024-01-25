function hogwarts(input) {
  let spell = input.shift();

  while (input[0] != "Abracadabra") {
    let line = input.shift();
    let tokens = line.split(" ");
    let command = tokens[0];

    switch (command) {
      case "Abjuration":
        //replace all letters wil uppercase
        spell = spell.toUpperCase();
        console.log(spell);
        break;
      case "Necromancy":
        //replace all letters wil lowercase
        spell = spell.toLowerCase();
        console.log(spell);
        break;
      case "Illusion": //Illusion 1 c
        //replace the letter of the index with the given one
        let idx = Number(tokens[1]);
        let newChar = tokens[2];
        if (spell.length < idx) {
          console.log("The spell was too weak.");
        } else {
          let firstHalf = spell.slice(0, idx);
          let secondHalf = spell.slice(idx + 1);
          spell = firstHalf + newChar + secondHalf;
          console.log("Done!");
        }
        break;
      case "Divination":
        let oldSub = tokens[1];
        let newSub = tokens[2];

        if (spell.includes(oldSub)) {
          spell = spell.split(oldSub).join(newSub);
          console.log(spell); //
        } else {
          continue; //skip the command!
        }
        break;
      case "Alteration":
        let strToRemove = tokens[1];
        if (spell.includes(strToRemove)) {
          spell = spell.replace(strToRemove, "");
          console.log(spell);
        } else {
          continue; //skip the command!
        }
        break;
      default:
        console.log("The spell did not work!");
    }
  }
}

hogwarts(["A7ci0", "Illusion 1 c", "Illusion 4 o", "Abjuration", "Abracadabra"]);
console.log("---------");
hogwarts(["TR1GG3R", "Necromancy", "Illusion 8 m", "Illusion 9 n", "Abracadabra"]);
console.log("---------");
hogwarts(["SwordMaster", "Target Target Target", "Abjuration", "Necromancy", "Alteration master", "Abracadabra"]);
