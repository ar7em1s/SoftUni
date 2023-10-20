function replace(str, char, word) {
  let result = str.replace("_", char);
  let output = result === word ? "Matched" : "Not Matched";
  console.log(output);
}

replace("Str_ng", "I", "Strong");
replace("Str_ng", "i", "String");
