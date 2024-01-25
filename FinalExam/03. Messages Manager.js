/* record = {
    'Berg': {sent messages, received messages},
    'Kevin': {sent messages, received messages},
    'Mark': {sent messages, received messages},
    'Bonnie': {sent messages, received messages},
}
*/

function messManages(input) {
  let capacity = input.shift(); //10
  let command = input.shift();

  let record = {};

  while (command != "Statistics") {
    let tokens = command.split("=");
    let action = tokens[0];
    //console.log(tokens);

    switch (tokens[0]) {
      case "Add":
        let [user, sent, received] = [tokens[1], tokens[2], tokens[3]];
        sent = Number(sent);
        received = Number(received);
        if (user in record) {
          continue;
        } else {
          record[user] = { sent, received };
        }
        //console.log(record);

        break;
      case "Message":
        let user1 = tokens[1];
        let user2 = tokens[2];

        if (user1 in record && user2 in record) {
          record[user1].sent += 1;
          record[user2].received += 1;
          //console.log(record);
        }

        if (record[user1].sent + record[user1].received >= Number(capacity)) {
          console.log(`${record.user1} reached the capacity!`);
          delete record[user1];
        }
        if (record[user2].sent + record[user2].received >= Number(capacity)) {
          console.log(`${record.user2} reached the capacity!`);
          delete record[user2];
        }
        break;
      case "Empty":
        let toDel = tokens[1];
        console.log(toDel);
        if (toDel == "All") {
          delete record;
        } else {
        }
        break;
    }

    command = input.shift();
  }
  for (let user in record) {
    let user = record[user];
    console.log(user);
    console.log(`${hero.HP}`);
    console.log(`${hero.MP}`);
  }
}

messManages(["10", "Add=Berg=9=0", "Add=Kevin=0=0", "Message=Berg=Kevin", "Statistics"]);
console.log("-----------");
messManages(["20", "Add=Mark=3=9", "Add=Berry=5=5", "Add=Clark=4=0", "Empty=Berry", "Add=Blake=9=3", "Add=Michael=3=9", "Add=Amy=9=9", "Message=Blake=Amy", "Message=Michael=Amy", "Statistics"]);
console.log("-----------");
messManages(["12", "Add=Bonnie=3=5", "Add=Johny=4=4", "Empty=All", "Statistics"]);
