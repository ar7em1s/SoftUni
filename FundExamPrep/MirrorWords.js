function mirror([input]) {
  // compose regex
  // find all matches in a loop
  // for every match:
  // - check if second word reversed is the same as the first
  // print result:

  let pattern = /(#|@)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/gi;
  let match = pattern.exec(input);
  let result = [];
  let count = 0;

  while (match) {
    count++;
    let first = match[2];
    let second = match[3];
    console.log(first, second);

    if (first == second.split("").reverse().join("")) {
      result.push(`${first} <=> ${second}`);
    }
    match = pattern.exec(input);
  }
  if (count == 0) {
    console.log("No word pairs found!");
  } else {
    console.log(`${count} word pairs found!`);
  }

  if (result.length == 0) {
    console.log("No mirror words!");
  } else {
    console.log("The mirror words are:");
    console.log(result.join(", "));
  }
}

mirror(["@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r"]);
console.log("---------");
mirror(["#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@"]);
console.log("---------");
mirror(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);
