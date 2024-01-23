function delimiterPrint(str, delimiter) {
    console.log(str.join(delimiter));
}

delimiterPrint(['One', 'Two', 'Three', 'Four', 'Five'],'-');
console.log('--------');
delimiterPrint(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_');
