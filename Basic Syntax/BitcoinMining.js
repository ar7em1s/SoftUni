// TBF

function mining(input) {
    let days = input.length;
    //let goldSum = 0;
    let lvSum = 0;
    let bitcoin = 0;
    
    for (let i = 0; i <= days - 1; i++) {
        if (i % 3 == 0 && (i != 0 && i != 1)) {
            input[i] -= input[i] * 0.30;
        }

        lvSum += input[i] * 67.51;

        if (lvSum >= 11949.1) {
            bitcoin++;
            lvSum -= 11949.1;
        }

        if (bitcoin <= 1) {
            console.log(`Day of the first purchased bitcoin: ${i}`);
        }
    }
    console.log(`Bought bitcoins: ${bitcoin}`);
    console.log(`Left money: ${(lvSum).toFixed(2)} lv.`); 
}

mining([100, 200, 300]);
console.log('----------');
// mining([50, 100]);
// console.log('----------');
// mining([3124.15, 504.212, 2511.124]);


/* Day 1 – you dig up 100 g of gold then exchange it for 6751.00 lv. 
Day 2 – you dig up 200 g of gold then exchange it for 13,502.00 lv. and the total amount of money is 20,253.00 lv. 
Then you buy 1 Bitcoin which leaves you with 8,303.84 lv. Also, this purchase is the first day you bought bitcoin. 

Day 3 – you dig up 300 g of gold but then 30% of it is stolen and your gold drops to 210 g which you exchange for 14,177.10 lv. making your total amount of money 22,480.94 lv. 
Then you buy 1 Bitcoin making the final amount of money that you have left with 10,531.78 lv. with 2 bought Bitcoins */
