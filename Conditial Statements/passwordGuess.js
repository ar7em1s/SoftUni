function password(input) {
  let pass = input[0];
  return pass == "s3cr3t!P@ssw0rd" ? "Welcome" : "Wrong password!";
  /* if (pass == "s3cr3t!P@ssw0rd") {
    console.log("Welcome");
  } else {
    console.log("Wrong password!");
  } */
}

console.log(password(["s3cr3t!P@ssw0rd"]));
