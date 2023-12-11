function encrypt(input) {
    let n = Number(input.shift());
    let pattern = /([*@])(?<tag>[A-Z][a-z]{2,})\1: (?<chars>(\[\w]\|){3})$/g;
    let wordPattern = /\w/g;

  for (let i = 0; i < n; i++) {
    let line = input.shift();
    let matches = pattern.exec(line);
    let numArr = [];
    

    if (matches == null) {
        console.log('Valid message not found!');
    } else {
        //console.log(matches['groups'].tag);
        let letters = matches['groups'].chars;
        for (let i = 0; i < letters.length; i++) {
           if ((letters[i].charCodeAt() >= 97 && letters[i].charCodeAt() <= 122) || (letters[i].charCodeAt() >= 65 && letters[i].charCodeAt() <= 90)) {
            numArr.push(letters[i].charCodeAt());
            
           }
           
        }
        console.log(`${matches['groups'].tag}: ${numArr.join(' ')}`);
    }
  }
}
encrypt((["3",
"*Request*: [I]|[s]|[i]|",
"*Taggy@: [73]|[73]|[73]|",
"Should be valid @Taggy@: [v]|[a]|[l]|"]));
console.log('---------');
encrypt((["3",
"@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn't be valid",
"*tAGged*: [i][i][i]|",
"Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|"]));
