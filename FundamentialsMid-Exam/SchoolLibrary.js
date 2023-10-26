function library(initBooks) {
  let shelfBooks = initBooks[0].split("&");
  let commandBook = initBooks[1].split(" | ");
  let command = commandBook[0];
  let i = 1;

  //   console.log(shelfBooks);
  //   console.log(commandBook);

  while (command != "Done") {
    switch (command) {
      case "Add Book":
        if (!shelfBooks.includes(commandBook[1].trim())) {
          shelfBooks.unshift(commandBook[1].trim());
        }
        break;
      case "Take Book ":
        if (shelfBooks.includes(commandBook[1].trim())) {
          shelfBooks.splice(shelfBooks.indexOf(commandBook[1].trim()), 1);
          //   console.log(shelfBooks);
        }
        break;
      case "Swap Books ":
        if (shelfBooks.includes(commandBook[1].trim()) && shelfBooks.includes(commandBook[2].trim())) {
          index1 = shelfBooks.indexOf(commandBook[1].trim());
          index2 = shelfBooks.indexOf(commandBook[2].trim());
          [shelfBooks[index1], shelfBooks[index2]] = [shelfBooks[index2], shelfBooks[index1]];
          console.log(shelfBooks);
        }
        break;
      case "Insert Book ":
        if (!shelfBooks.includes(commandBook[1].trim())) {
          shelfBooks.push(commandBook[1].trim());
        }
        break;
      case "Check Book":
        console.log(shelfBooks[commandBook[1]]);

        break;
    }

    i++;
    commandBook = initBooks[i].split("|");
    command = commandBook[0];
  }
  console.log(shelfBooks.join(", "));
}

library(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger", "Add Book | Catch-22", "Swap Books | Anna Karenina | Catch-22", "Take Book | David Copperfield", "Done"]);
// Catch-22, Heart of Darkness, Anna Karenina, The Stranger
