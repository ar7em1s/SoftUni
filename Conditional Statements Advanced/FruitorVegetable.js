function food(input) {
  let type = input[0];

  switch (type) {
    case "banana":
    case "apple":
    case "kiwi":
    case "cherry":
    case "lemon":
    case "grapes":
      console.log("fruit");
      break;
    case "tomato":
    case "cucumber":
    case "pepper":
    case "carrot":
      console.log("vegetable");
      break;
    default:
      console.log("unknown");
  }
}

food(["banana"]);
food(["apple"]);
food(["kiwi"]);
food(["cherry"]);
food(["blueberry"]);
food(["lemon"]);
food(["grapes"]);
food(["tomato"]);
food(["cucumber"]);
food(["pepper"]);
food(["carrot"]);
food(["peach"]);
food(["onion"]);
