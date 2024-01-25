function sort2criteria(arr) {
   arr.sort(function(a, b) {
    let lengthCompare = a.length - b.length; // Compare lengths

    if (lengthCompare === 0) { // If lengths are equal, compare alphabetically (case-insensitive)
        return a.toLowerCase().localeCompare(b.toLowerCase());
    }
    return lengthCompare;

   });
   
   arr.forEach(function (element) { // Print each element on a new line
        console.log(element);
   });

}
sort2criteria(['alpha','beta','gamma']);
console.log('------');
sort2criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
console.log('------');
sort2criteria(['test', 'Deny', 'omen', 'Default']);
