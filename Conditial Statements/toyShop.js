/* Петя има магазин за детски играчки. Тя получава голяма поръчка, която трябва да изпълни. С парите, които ще спечели иска да отиде на екскурзия.
Цени на играчките:
· Пъзел - 2.60 лв. Говореща кукла - 3 лв. Плюшено мече - 4.10 лв. Миньон - 8.20 лв. Камионче - 2 лв.
Ако поръчаните играчки са 50 или повече магазинът прави отстъпка 25% от общата цена. От спечелените пари Петя трябва да даде 10% за наема на магазина. 
Да се пресметне дали парите ще ѝ стигнат да отиде на екскурзия.
Вход От конзолата се четат 6 реда:
1. Цена на екскурзията - реално число в интервала [1.00 … 10000.00]
2. Брой пъзели - цяло число в интервала [0… 1000]
3. Брой говорещи кукли - цяло число в интервала [0 … 1000]
4. Брой плюшени мечета - цяло число в интервала [0 … 1000]
5. Брой миньони - цяло число в интервала [0 … 1000]
6. Брой камиончета - цяло число в интервала [0 … 1000]
Изход На конзолата се отпечатва:
· Ако парите са достатъчни се отпечатва: "Yes! {оставащите пари} lv left."
· Ако парите НЕ са достатъчни се отпечатва: "Not enough money! {недостигащите пари} lv needed."
Резултатът трябва да се форматира до втория знак след десетичната запетая. (["320", "8", "2", "5", "5", "1"]) Not enough money! 238.73 lv needed. */

function vacation(input) {
  let vacationPrice = Number(input[0]);
  let puzzles = Number(input[1]);
  let dolls = Number(input[2]);
  let teddybears = Number(input[3]);
  let minions = Number(input[4]);
  let trucks = Number(input[5]);
  let toyPrice =
    puzzles * 2.6 + dolls * 3 + teddybears * 4.1 + minions * 8.2 + trucks * 2;
  let toyCount = puzzles + dolls + teddybears + minions + trucks;
  //let rent = toyPrice * 0.1;
  //let profit = toyPrice - rent;

  if (toyCount >= 50) {
    toyPrice = toyPrice - toyPrice * 0.25;
  }
  toyPrice -= toyPrice * 0.1;

  if (vacationPrice <= toyPrice) {
    // !! ofter mistake !!
    console.log(
      `Yes! ${Math.abs(toyPrice - vacationPrice).toFixed(2)} lv left.`
    );
  } else {
    console.log(
      `Not enough money! ${Math.abs(toyPrice - vacationPrice).toFixed(
        2
      )} lv needed.`
    );
  }
}
vacation(["40.8", "20", "25", "30", "50", "10"]);
