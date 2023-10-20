function login(input) {
  let user = input[0];
  let pass = input[1];
  let index = 3;
  let currentTry = input[2];

  while (currentTry !== pass) {
    index++;
    currentTry = input[index];
  }
  console.log(`Welcome ${user}!`);
}

login(["Nakov", "1234", "Pass", "1324", "1234"]);
login(["Gosho", "secret", "secret"]);
