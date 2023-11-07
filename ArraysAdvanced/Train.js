/* You will be given an array of strings.
The first element will be a string containing wagons (numbers). Each number inside the string represents the number of passengers that are currently in a wagon.
The second element in the array will be the max capacity of each wagon (single number).
The rest of the elements will be commands in the following format:
· Add {passengers} – add a wagon to the end with the given number of passengers.
· {passengers} - find an existing wagon to fit all the passengers (starting from the first wagon)
At the end, print the final state of the train (all the wagons separated by a space) */

function train(initArr) {
    let wagons = initArr.shift().split(" ").map(Number); //'32 54 21 12 4 0 23'
    let wagonCap = Number(initArr.shift()); // 75

    for (let i = 0; i < initArr.length; i++) {
    let parts = initArr[i].split(' ');
    let action = parts[0];
    let freeRoom = wagonCap - parts[0];

    if (action === "Add") {
        wagons.push(Number(parts[1]));
    } else {
        if (action <= freeRoom){
            action += freeRoom;
            wagons.push(action);
        }
    }
   
    }
    console.log(wagons);
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']);
console.log("-----------");
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']);