/* Write a function that manages meeting appointments. The input comes as an array of strings. Each string contains a weekday and person’s name. 
For each successful meeting, print a message. If you receive the same weekday twice, the meeting cannot be scheduled so print a conflicting message. 
In the end, print a list of all successful meetings. */

function meet(arrInput) {
    let meetings = {}; // empty object

    for (let line of arrInput) { // iteration over the array to split the elements
        let [day, name] = line.split(' '); 

        if (meetings.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
            continue;
        } else {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (let key in meetings) { // iteration over the object to print the elements
        console.log(`${key} -> ${meetings[key]}`);
    }

}

meet(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);
console.log("-------------");
meet(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']);

