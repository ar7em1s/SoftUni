function title(input) {
  let age = Number(input[0]);
  let gender = input[1];

  switch (gender) {
    case "m":
      if (age < 16) {
        console.log("Master");
      } else {
        console.log("Mr.");
      }
      break;
    case "f":
      if (age < 16) {
        console.log("Miss");
      } else {
        console.log("Ms.");
      }
      break;
  }
}

title(["12", "f"]);
title(["17", "m"]);
title(["25", "f"]);
title(["13.5", "m"]);
