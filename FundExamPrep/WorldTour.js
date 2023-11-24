// 83/100 ???

function travel(input) {
    let travelPlan = input.shift();

    while (input[0] !== 'Travel') {
        let line = input.shift();
        let tokens = line.split(':');
        let command = tokens[0];

        switch (command) {
            case 'Add Stop': 
            let idx = Number(tokens[1]);
            let newStop = tokens[2];
            let firstHalf = travelPlan.slice(0, idx);
            let secondHalf = travelPlan.slice(idx);
            travelPlan = firstHalf + newStop + secondHalf;
                console.log(travelPlan);
                break;
            case 'Remove Stop': 
            let startIdx = Number(tokens[1]);
            let endIdx = Number(tokens[2]);
            let first = travelPlan.slice(0, startIdx);
            let second = travelPlan.slice(endIdx + 1);
            travelPlan = first + second;
                console.log(travelPlan);
                break;
            case 'Switch':
                let oldValue = tokens[1];
                let replacement = tokens[2];
                let parts = travelPlan.split(oldValue);
                travelPlan = parts.join(replacement); 
                    console.log(travelPlan)
                    break;
        }
    }
    console.log(`Ready for world tour! Planned stops: ${travelPlan}`);
}

travel(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]);

console.log('--------');

travel(["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"]);
