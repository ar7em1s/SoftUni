function extract(content) {
    let text = document.getElementById('content').textContent;
    let regex = /\((\w+(?:\s+\w+)*)\)/g;
    let wordList = [];

    let matches = text.matchAll(regex);
    for (let match of matches) {
        wordList.push(match[1])
    }
    let sortedList = wordList.join('; ');
}