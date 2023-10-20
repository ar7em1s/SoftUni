function login(input) {
  let username = input[0];
  let password = username.split("").reverse().join("");

  let guess = input[1];
  let index = 2;
  let attempts = 0;

  while (guess != password) {
    attempts++;
    if (attempts == 4) {
      console.log(`User ${username} blocked!`);
      return;
    }
    console.log("Incorrect password. Try again.");
    guess = input[index];
    index++;
  }
  console.log(`User ${username} logged in.`);
}

login(["Acer", "login", "go", "let me in", "recA"]);
console.log("-----");
login(["momo", "omom"]);
console.log("-----");
login(["sunny", "rainy", "cloudy", "sunny", "notsunny"]);
console.log("-----");
