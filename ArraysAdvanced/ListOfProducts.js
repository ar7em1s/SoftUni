// You will receive an array of products. Print a numbered array of all the products ordered by name.

function shoppingList(strArr) {
    strArr.sort();

    for (let i = 0; i < strArr.length; i++) {
    console.log(`${i + 1}.${strArr[i]}`);
    }
}

shoppingList(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
console.log("------------");
shoppingList(['Watermelon', 'Banana', 'Apples']);