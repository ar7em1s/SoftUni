/* You will receive 3 parameters (string, char, string). The first string will be a word with a missing char replaced with an underscore '_'. 
You have to replace the missing character (underscore) of the first string with the character passed as the second parameter and compare the result with the second string.
If they are equals, you should print "Matched", otherwise print "Not Matched". */

function place(str1, char, str2) {
    let newStr = str1.replace("_", char);
    console.log( newStr === str2 ? "Matched" : "Not Matched" );
}

place('Str_ng', 'I', 'Strong');
console.log("-----------");
place('Str_ng', 'i', 'String');