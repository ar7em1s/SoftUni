// in progress

function emoji(input) {
  let pattern = /([:*]{2})([A-Z][a-z]{2,})\1/g;
  let patternForNums = /([0-9])/g;

  let match = pattern.exec(input);
  let matchForNums = patternForNums.exec(input);

  let coolNums = 1;
  let coolEmojis = [];
  let coolEmojiCount = 0;

  while (matchForNums) {
    coolNums *= Number(matchForNums[0]);
    matchForNums = patternForNums.exec(input);
  }

  while (match) {
    coolEmojis.push(match[2]);
    match = pattern.exec(input);
  }

  let asciiSums = coolEmojis.map((word) => {
    let sum = 0;
    for (let i = 0; i < word.length; i++) {
      sum += word.charCodeAt(i);
    }
    return sum;
  });
  for (let el of asciiSums) {
    if (el >= coolNums) {
      coolEmojiCount++;
    }
  }
  console.log(`${coolEmojiCount} emojis found in the text. The cool ones are:`);
  if (el >= coolNums) {
    console.log(`${word}`);
  }
}

emoji(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
// emoji(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
// emoji(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);
