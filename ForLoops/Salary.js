function salary(input) {
  let tabs = Number(input[0]);
  let money = Number(input[1]);

  for (let i = 0; i < tabs; i++) {
    let tabName = input[i];
    if (tabName === "Facebook") {
      money -= 150;
    } else if (tabName === "Instagram") {
      money -= 100;
    } else if (tabName === "Reddit") {
      money -= 50;
    }

    if (money <= 0) {
      console.log("You have lost your salary.");
      return;
    }
  }

  console.log(money);
}

salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);
console.log("--------");
salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
console.log("--------");
salary(["3", "350", "Facebook", "Stackoverflow.com", "softuni.bg"]);
