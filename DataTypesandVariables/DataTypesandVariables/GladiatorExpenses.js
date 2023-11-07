function gladiator(lostFigths, helmet, sword, shield, armor) {

    let expenses = 0;
    let isBroken = 0;
    for (let i = 1; i <= lostFigths; i++) {
        if (i % 2 == 0) {
            expenses += helmet;
        }
        if (i % 3 == 0) {
            expenses += sword;
        }
        if (i % 2 == 0 && i % 3 == 0) {
            expenses += shield;
            isBroken++;
            if (isBroken % 2 == 0) {
            expenses += armor; 
            }
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiator(7, 2, 3, 4, 5);
console.log("-------------");
gladiator(23, 12.50, 21.50, 40, 200);