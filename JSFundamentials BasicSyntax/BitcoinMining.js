/* Write a JavaScript program that calculates the total amount of bitcoins you purchased with the gold you mined during your shift at the mine. 
Your shift consists of a certain number of days where you mine an amount of gold in grams. 
Your program will receive an array with the amount of gold you mined each day, where the first day of your shift is the first index of the array. 
Also, someone was stealing every third day from the start of your shift 30% from the mined gold for this day. 
You need to check, which day you have enough money to buy your first bitcoin. For the different exchanges use these prices: 1 Bitcoin 11949.16 lv.; 1 g of gold 67.51 lv. */

function bitcoin(input) {
  let shifts = input.length;

  let gold = 0;
  while (i <= shifts) {
    gold += shifts[i];
    console.log(shifts);
  }
}

bitcoin([100, 200, 300]);
console.log("-----------");
bitcoin([50, 100]);
console.log("-----------");
bitcoin([3124.15, 504.212, 2511.124]);
console.log("-----------");
