function pianist(input) {
    let n = Number(input.shift());
    let musicList = {};


    for (let i = 0; i < n; i++) {
        let musicData = input.shift();
        let [piece, composer, key] = musicData.split('|');

        let sheet = {
            composer: composer,
            key: key
        }

        musicList[piece] = sheet;
    }
    
    while (input[0] != 'Stop') {
        let line = input.shift();
        let tokens = line.split('|');
        let command = tokens[0];
        let piece = tokens[1];
        let sheet = musicList[piece];

        switch (command) {
            case 'Add': // |{piece}|{composer}|{key}
            let composer = tokens[2];
            let key = tokens[3];
            if (piece in musicList) {
                console.log(`${piece} is already in the collection!`);
            } else {
                musicList[piece] = {composer, key};
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
            break;
            case 'Remove': // |{piece}
            if (piece in musicList) {
                delete musicList[piece]
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
            break;
            case 'ChangeKey': // |{piece}|{new key} 
            if (piece in musicList) {
                let newKey = tokens[2];
                musicList[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
            break;
        }
    }
    for (let piece in musicList) {
        let sheet = musicList[piece];
        console.log(`${piece} -> Composer: ${sheet.composer}, Key: ${sheet.key}`);
      }
}
