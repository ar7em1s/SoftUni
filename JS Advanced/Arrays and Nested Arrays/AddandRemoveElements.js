function addRemove(arr) {
    let array = [];

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] == "add") {
            array.push(i + 1);
        } else if (arr[i] == "remove") {
            array.pop(i);
        }
    }
    if (array.length == 0) {
        console.log('Empty');
    } else {
        console.log(array.join('\n'));
    }
}

addRemove(['add','add','add','add']);
console.log('-------');
addRemove(['add', 'add', 'remove', 'add', 'add']);
console.log('-------');
addRemove(['remove', 'remove', 'remove']);
