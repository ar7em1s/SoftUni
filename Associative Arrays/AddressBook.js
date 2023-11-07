/* Write a function that stores information about a person’s name and his address. The input comes as an array of strings. 
Each string contains the name and the address separated by a colon. 
If you receive the same name twice just replace the address. In the end, print the full list, sorted alphabetically by the person’s name.*/

function address(input) {
    let addressBook = {};

    for (let line of input) {
        let [name, address] = line.split(':');
        addressBook[name] = address;
    }

    let arrForSort = Object.entries(addressBook); // creating an array from object throught the Object library
    arrForSort.sort((a, b) => a[0].localeCompare(b[0]));
    
    let sorted = {};
    for (let [name, address] of arrForSort) { 
        sorted[name] = address;
    }

    for (let [name, address] of Object.entries(sorted)) { 
        console.log(name, `->`, address);   
    }
}

address(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);

console.log("--------------");

address(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd'])
