/* You will be given a string representing a username. The correct password will be that username reversed. 
Until you receive the correct password print on the console: "Incorrect password. Try again.". 
When you receive the correct password print: "User {username} logged in."
However, on the fourth try if the password is still not correct print: "User {username} blocked!" and end the program.
The input comes as an array of strings - the first string represents username and each subsequent string is a password. */

function login(input) {
    let user = input[0]; // Acer
    //let password = user.split("").reverse().join(""); //'recA'

    for (let i = 1; i < input.length; i++) {
        if (i >= 4 && user !== input[i].split("").reverse().join("")) {
            console.log(`User ${user} blocked!`);
            break;
        }
        if (user === input[i].split("").reverse().join("")) {
            console.log(`User ${user} logged in.`);
        } else {
            console.log(`Incorrect password. Try again.`);
        }
    }
}

login(['Acer','login','go','let me in','recA']);
console.log("------------");
login(['momo','omom']);
console.log("------------");
login(['sunny','rainy','cloudy','sunny','notsunny']);
