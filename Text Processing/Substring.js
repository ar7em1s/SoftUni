function textSub(text, startIDX, count) {
    let result = text.substring(startIDX, startIDX + count);
    console.log(result);
}

textSub('ASentence', 1, 8);
console.log("---------");
textSub('SkipWord', 4, 7);


