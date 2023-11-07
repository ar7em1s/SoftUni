/* Write a function that manipulates an array of numbers.
· Add {number}: add a number to the end of the array
· Remove {number}: remove all occurrences of a particular number from the array
· RemoveAt {index}: removes number at a given index
· Insert {number} {index}: inserts a number at a given index
Note: All the indices will be valid!
The input comes as an array of strings. The first element will be a string containing the array to manipulate. 
Every other command you receive will also be a string.
The output is the manipulated array printed on the console on a single line, separated by space. */

function arrayManupulation(initArr) {
    let arr = initArr
    .shift()
    .split(" ")
    .map(Number);

    for (let i = 0; i < initArr.length; i++) {
        let numbers = initArr[i].split(" ");
        let command = initArr[0];

        switch (command) {
            case "Add": 
                let numberToAdd = Number(parts[1]);
                arr.push(numberToAdd);
                break;

            case "Remove": 
                let numberToRemove = Number(numbers[1]);
               arr = arr.filter(item => item !== numberToRemove);
            break;

            case "RemoveAt": 
            let indexToBeRemoved = Number(number[1]);
                arr.splice(indexToBeRemoved, 1);
            break;

            case "Insert": 
                let numberToInsert = Number(parts[1]);
                let indexToInsert = Number(parts[2]);
                arr.splice(numberToInsert, 0, indexToInsert);
            break;
        }
    
    }

    console.log(arr.join(" "));
}

arrayManupulation(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']);
console.log("---------");
arrayManupulation(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']);
