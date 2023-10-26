function toJason(firstName, lastName, hairColor) {
  let person = {
    name: firstName,
    lastName: lastName,
    hairColor: hairColor,
  };
  console.log(JSON.stringify(person));
}

toJason("George", "Jones", "Brown");
console.log("---------");
toJason("Peter", "Smith", "Blond");
