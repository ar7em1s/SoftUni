function travel(input) {
    let worldTour = input.shift();
    

    while (input[0] != "Travel") {
        let line = input.shift();
        let tokens = line.split(':');
        let command = tokens[0];

        switch (command) {
            case 'Add Stop': 
            let idx = Number(tokens[1]);
            let str = tokens[2];

            if (idx >= 0 && idx <= worldTour.length) { // added IF to be 0-index inclusive
                let first = worldTour.slice(0, idx);
                let second = worldTour.slice(idx);
                worldTour = first + str + second;
                console.log(worldTour);
            } else {
                console.log(worldTour);
            }
            break;

            case 'Remove Stop': 
            let startIdx = Number(tokens[1]);
            let endIdx = Number(tokens[2]);

            if (startIdx >= 0 && startIdx < worldTour.length && // ^^^ ditto
                endIdx >= 0 && endIdx < worldTour.length) {
              let firstHalf = worldTour.slice(0, startIdx);
              let secondHalf = worldTour.slice(endIdx + 1);

              worldTour = firstHalf + secondHalf;
              console.log(worldTour);
            } else {
                console.log(worldTour);
            }
            break;

            case 'Switch': 
            let oldStr = tokens[1];
            let replacement = tokens[2];
            if (worldTour.includes(oldStr)) {
            worldTour = worldTour.split(oldStr).join(replacement);
            console.log(worldTour);
        } else {
            console.log(worldTour);
        }
            break;

        }
    }
    console.log(`Ready for world tour! Planned stops: ${worldTour}`);
}
