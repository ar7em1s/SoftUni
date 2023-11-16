/* You will receive a single string.
This string is written in PascalCase format. Your task here is to split this string by every word in it.
Print them joined by comma and space. */

function pascal(string) {
    let wordsArray = string.split(/(?=[A-Z])/);
  // Join the array with comma and space
    let result = wordsArray.join(', ');
    console.log(result);
}

pascal('SplitMeIfYouCanHaHaYouCantOrYouCan') 
console.log('----------');
pascal('HoldTheDoor');
console.log('----------');
pascal('ThisIsSoAnnoyingToDo');