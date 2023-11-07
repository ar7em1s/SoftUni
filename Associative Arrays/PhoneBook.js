// Write a function that stores information about a person’s name and phone number. 
// The input is an array of strings with space-separated name and number. Replace duplicate names. Print the result as shown.

function phone(input) {
    let phoneBook = {}; // empty object
    
    for (let line of input) { // iteration over the array to split the elements
        let [name, phone] = line.split(' ');

        phoneBook[name] = phone; // creating an object from the array
    }

    for (let key in phoneBook) { // iteration over the object to print the elements
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}

phone(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);

console.log("----------");

phone(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344'])