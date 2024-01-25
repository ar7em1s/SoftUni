function decripter(input) {
  let occurences = input.shift();
  let pattern = /^([$%])(?<tag>[A-Z][a-z]{2,})\1:\s(?<codes>([\[]\d+[\]|]+)([\[]\d+[\]|]+)([\[]\d+[\]|]+))$/g;
  let patternForNums = /(\d+)/g;

  let matches = pattern.exec(input);

  for (let i = 0; i < occurences; i++) {
    matches = pattern.exec(input[i]);
    if (matches == null) {
      console.log("Valid message not found!");
    } else {
      let tagType = matches.groups;
      let a = matches[4];
      let b = matches[5];
      let c = matches[6];
      let charA = String.fromCharCode(Number(a.match(patternForNums)));
      let charB = String.fromCharCode(Number(b.match(patternForNums)));
      let charC = String.fromCharCode(Number(c.match(patternForNums)));
      console.log(`${tagType.tag}: ${charA + charB + charC}`);
    }
  }
}

decripter(["4", "$Request$: [73]|[115]|[105]|", "%Taggy$: [73]|[73]|[73]|", "%Taggy%: [118]|[97]|[108]|", "$Request$: [73]|[115]|[105]|[32]|[75]"]);
console.log("-------");
decripter(["3", "This shound be valid%Taggy%: [73]|[115]|[105]|", "&tAGged$: [97]|[97]|[97]|", "$Request$: [73]|[115]|[105]|[true']"]);
