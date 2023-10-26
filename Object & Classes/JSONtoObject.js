function parse(jsonStr) {
  let parsedStr = JSON.parse(jsonStr);
  let keys = Object.keys(parsedStr);

  for (let key of keys) {
    console.log(key + ": " + parsedStr[key]);
  }
}

parse('{"name": "George", "age": 40, "town": "Sofia"}');
console.log("----------");
parse('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
